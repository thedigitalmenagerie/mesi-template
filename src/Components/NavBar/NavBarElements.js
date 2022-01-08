import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const NavBarContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 75px;
  color: #EAE7D6;
`;

export const NavLeft = styled.div`
  display: flex;
  width: 50%;
  justify-content: flex-start;
`;

export const NavRight = styled.div`
  display: flex;
  width: 50%;
  justify-content: flex-end;
`;

export const NavRightMessage = styled.div`
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 490px) {
    display: none;
  }
`;

export const LogoButton = styled.button`
background-color: Transparent;
background-repeat:no-repeat;
border: none;
cursor:pointer;
overflow: hidden;
`;

export const LogoImg = styled.img`
  width: 100px;
  margin-left: 10px;
`;

export const Img = styled.img`
  width: 30px;
  border-radius: 50%;
  margin-right: 10px;
  filter: grayscale(100%);
`;

export const SignOutButtonContianer = styled.div`
`;

export const SignOutButton = styled.button`
background-color: Transparent;
background-repeat:no-repeat;
border: none;
cursor:pointer;
overflow: hidden;

`;

export const SignOutButtonImg = styled.img`
  width: 15px;
  margin-left: 10px;
  margin-right: 10px;
`;
