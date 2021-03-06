import styled from 'styled-components';

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;

  img {
    width: 30%;
  }
`;

export const ItemsDetailContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;

  .name {
    font-size: 16px;
    width: 100%;
  }
  
  .price  {
    width: 100%;
  }
`;

