import styled from 'styled-components';

export const SingleTaskCardOuter = styled.div`
  height: 100%;
  width: 100%;
`;

export const SideTaskCard = styled.div`
  display: flex;
  height: 300px;
  width: 200px;
  flex-direction: column;
  border-radius: 10px;
  background-color: #eae7d6;
  color: #5d7b6f;
  padding: 10px;
  margin: 20px;
  box-shadow: 0 8px 16px 0 #212529;
  position: fixed;
//   z-index: 999;
//   display: grid;
//   align-items: center;
  top: 0;
  left: 0;
//   transitionL 0.3s ease-in-out;
//   opacity:  ${({ isOpen }) => (isOpen ? '0' : '100%')};
//   top: ${({ isOpen }) => (isOpen ? '100%' : '0')};
`;

export const SideTaskCardTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 25%;
`;

export const SideTaskCardTopLeft = styled.div`
  display: flex;
  flex-direction: column;
  writing-mode: vertical-rl;
  color: #B0D4B8;
  font-weight: bold;
`;

export const SideTaskCardTopRight = styled.div`
  color: #5D7B6F;
  font-size: xx-small;
`;

export const SideTaskCardMiddle = styled.div`
  display: flex;
  justify-content: center;
  height: 50%;
`;

export const SideTaskCardBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 25%;
`;

export const SideTaskCardBottomLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const SideTaskCardBottomLeftInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const SideTaskCardBottomRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
`;

export const Modal = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
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

export const SideTaskCardImg = styled.img`
  width: 100px;
`;

export const HouseholdCardDelete = styled.div``;

export const ValueButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: Transparent;
  background-repeat:no-repeat;
  border: none;
  cursor:pointer;
  overflow: hidden; 
`;

export const ValueButtonImg = styled.img`
  width: 25px; 
`;

export const ValueButtonImg2 = styled.img`
  height: 25px;
  margin-right: 2px;
`;

export const MainTaskCard = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #B0D4B8;
  margin-top: 50px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const MainTaskCardLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 50%;
  margin-left: 40px;
  margin-top: 300px;
`;

export const MainTaskCardRight = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  font-size: small;
  font-weight: bold;
  color: #5D7B6F;
`;

export const MainTaskCardRightTop = styled.div`
  display: flex;
  flex-direction: column;
  font-size: small;
  font-weight: bold;
  color: #5D7B6F;
  margin-top: 30px;
`;

export const MainTaskCardRightMiddle = styled.div`
  display: flex;
  flex-direction: row;
  font-size: small;
  font-weight: bold;
  color: #5D7B6F;
  justify-content: space-around;
  margin-top: 30px;
`;

export const MainTaskCardRightMiddleTop = styled.div``;

export const MainTaskCardRightMiddleBottom = styled.div`
`;

export const MainTaskCardRightMiddleBottomLeft = styled.div`
  width: 30%;
`;

export const MainTaskCardRightMiddleBottomMiddle = styled.div`
  width: 30%;
`;

export const MainTaskCardRightMiddleBottomRight = styled.div`
  width: 30%;
`;

export const Title = styled.div`
 font-weight: bold;
 font-size: larger;
 color: #D7F9F8;
 text-align: center;
`;

export const MainTaskCardRightBottom = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  text-align: center;
  margin-bottom: 30px;
`;

export const DailyGrindDiv = styled.div`
  font-size: small;
  font-weight: bold;
  color: #5D7B6F;
  padding-bottom: 30px;
`;
