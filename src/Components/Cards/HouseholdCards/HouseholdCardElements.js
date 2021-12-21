/* eslint-disable quotes */
import styled from 'styled-components';

export const HouseholdCard = styled.div`
  display: flex;
  height: 450px;
  width: 300px;
  flex-direction: column;
  border-radius: 10px;
  background-color: #eae7d6;
  color: #5d7b6f;
  padding: 10px;
  opacity:  ${({ isOpen }) => (isOpen ? '0' : '100%')};
  top: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  box-shadow: 0 8px 16px 0 #212529;
`;

export const HouseholdTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 25%;
`;

export const HouseholdTopLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HouseholdTopRight = styled.div``;

export const HouseholdMiddle = styled.div`
  display: flex;
  justify-content: center;
  height: 50%;
`;

export const HouseholdBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 25%;
`;

export const HouseholdBottomLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
`;

export const HouseholdBottomRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
`;

export const HouseholdTypeContainer = styled.div``;

export const Modal = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transitionL 0.3s ease-in-out;
  opacity:  ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '100%')};
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: Transparent;
  background-repeat:no-repeat;
  border: none;
  cursor:pointer;
  overflow: hidden; 
`;

export const Img = styled.img`
  width: 35px;
`;

export const HouseholdCardImg = styled.img`
  width: 200px;
`;

export const HouseholdCardDelete = styled.div``;
