/* eslint-disable quotes */
import styled from 'styled-components';

export const HouseholdTaskCardContainer = styled.div`
  color: #EAE7D6;
`;

export const Modal = styled.div`
position: fixed;
z-index: 999;
background: #5D7B6F;
display: flex;
flex-direction: column;
justify-content: center;
top: 0;
left: 0;
transitionL 0.3s ease-in-out;
opacity:  ${({ isOpen }) => (isOpen ? '100%' : '0')};
top: ${({ isOpen }) => (isOpen ? '0' : '100%')};
`;

export const HouseholdTaskCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HouseholdTaskCardTopRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const HouseholdTaskCardBottomRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  padding-top: 50px;
  height: 75%;
`;

export const AddHouseholdTaskCardButtonImg = styled.img`
  width: 25px;
`;

export const AddButtonContainer = styled.div`
margin-left: 10px;
`;

export const ButtonContainer = styled.div`
display: flex;
justify-content: flex-end;
`;

export const Button = styled.button`
margin-right: 20px;
display: flex;
flex-direction: row;
justify-content: flex-end;
background-color: Transparent;
background-repeat:no-repeat;
border: none;
cursor:pointer;
overflow: hidden;
`;

export const ButtonImg = styled.img`
  width: 20px;
`;

export const AddHouseholdTaskCardButton = styled.button`
display: flex;
flex-direction: row;
justify-content: flex-end;
background-color: Transparent;
background-repeat:no-repeat;
border: none;
cursor:pointer;
overflow: hidden;
`;
