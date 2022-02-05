import styled, { css } from 'styled-components';

const normalStyle = css`
  background-color: black;
  color: white;
  border: none;

  :hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  :hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleStyles = css`
  background-color: #4385f4;
  color: #fff;
  border: none;

  :hover {
    background-color: #557ae8;
    color: #ffffff;
  }
`;

const getStyle = props => {
  if(props.signInWithGoogle) {
    return googleStyles;
  } else {
    return props.invert ? invertStyles : normalStyle;
  }
}

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${props => props.addToCart 
    ? 'position: absolute; top: 60%;'
    : ''
  }

  ${getStyle}
`;