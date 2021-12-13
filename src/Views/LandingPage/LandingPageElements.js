import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const LandingPageContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LandingPageTop = styled.div`
  background: #5D7B6F;
  height: 50%;

  @media screen and (max-width: 471px) {
    max-width: 80%;
  }
`;

export const Logo = styled.img`
  max-width: 100%;
  height: 100%;
`;

export const About = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    color: #EAE7D6;
`;

export const Link = styled.a`
    padding-left: 5px;
    background: transparent;
    color: #EAE7D6;

    &:hover {
        color: lightblue;
      }
`;

export const LandingPageBottom = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SignIn = styled.div`
  background: #5D7B6F;
`;

export const Description = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;

  @media screen and (max-width: 471px) {
    flex-direction: column;
    align-self: center;
    align-items: center;
  }
`;

export const DropDownContent = styled.div`
  display: none;
  max-width: 150px;
  color: #FCC0C5;
`;

export const AcronymM = styled.div`
  color: #EAE7D6;
  padding: 10px;

  &:hover ${DropDownContent} {
    display: flex;
    // flex-direction: column-reverse;
    font-size: 10px;
  }
`;

export const AcronymE = styled.div`
  color: #EAE7D6;
  padding: 10px;

  &:hover ${DropDownContent} {
    display: flex;
    flex-direction: column-reverse;
    font-size: 10px;
  }
`;

export const AcronymS = styled.div`
  color: #EAE7D6;
  padding: 10px;

  &:hover ${DropDownContent} {
    display: flex;
    flex-direction: column-reverse;
    font-size: 10px;
  }
`;

export const AcronymI = styled.div`
  color: #EAE7D6;
  padding: 10px;

  &:hover ${DropDownContent} {
    display: flex;
    flex-direction: column-reverse;
    font-size: 10px;
  }
`;

export const ButtonContainer = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const SignInButton = styled.button`
  background: #EAE7D6;
  color: #5D7B6F;
  width: 100px;
  border-radius: 10px;
`;

export const SignOutButton = styled.button`
background: #5D7B6F;
`;
