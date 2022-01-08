/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const CategoryTypeContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 33%;
  border-radius: 15px;
  align-items: center;
`;

export const Title = styled.div`
  border-radius: 15px;
  font-weight: bolder;
  font-size: 20px;
  margin-top: 20px;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: row;
  width: 20%;
  height: 100%;
  font-weight: bolder;
  padding-left: 10px;
`;

export const Right = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 80%;
  font-size: xx-small;
  font-weight: bold;
`;

export const Img = styled.img`
  height: 30px;
  border-radius: 50%;
  margin-left: 5px;
  margin-top: 20px;
  filter: grayscale(100%);
`;
