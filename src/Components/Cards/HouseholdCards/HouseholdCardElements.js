/* eslint-disable quotes */
import styled from 'styled-components';

export const HouseholdCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  width: 25%;
  height: 20%;
  opacity: .5;
  margin-left: 75px;

opacity:  ${({ isOpen }) => (isOpen ? '0' : '100%')};
top: ${({ isOpen }) => (isOpen ? '100%' : '0')};
`;

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

`;

export const Button1 = styled.button`

`;

export const HouseholdCardImg = styled.img`

`;

export const HouseholdCardHeader = styled.div`

`;

export const HouseholdCardButtons = styled.div`

`;

export const HouseholdCardEdit = styled.img`

`;

export const HouseholdCardDelete = styled.img`

`;

export const HouseholdCardFooter = styled.div`

`;

export const Modal1 = styled.div`
`;
