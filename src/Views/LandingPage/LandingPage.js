/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { signInUser } from '../../Helpers/auth';
import {
  LandingPageContainer,
  LandingPageBottom,
  LandingPageTop,
  Logo,
  About,
  SignIn,
  Description,
  AcronymM,
  DropDownContent,
  AcronymE,
  AcronymS,
  AcronymI,
  ButtonContainer,
  SignInButton,
  Link,
} from './LandingPageElements';
import LOGO from '../../Assets/LOGO.png';

function LandingPage({ user }) {
  return (
    <LandingPageContainer className='LandingPageContainer'>
      <LandingPageTop className='LandingPageTop'>
          <Logo className='Logo' src={LOGO}></Logo>
      </LandingPageTop>
      <LandingPageBottom className='LandingPageBottom'>
          <About>Your way to
                <Link className='FairPlayLink'
                  href="https://www.fairplaylife.com/about-the-book"
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Fair Play
                </Link>
              .</About>
        <SignIn className='SignIn'>
        {
            user !== null
            && <ButtonContainer className='ButtonContainer'>
              {
                (user)
                  ? <Link href="/dashboard" className='goToDash'>
                      GO TO DASH
                    </Link>
                  : <SignInButton className='SignInButton' onClick={signInUser}>
                      SIGN IN
                    </SignInButton>
              }
              </ButtonContainer>
            }
        </SignIn>
        <Description className='Description'>
            <AcronymM className='Acronym'>
              Mental Load
              <DropDownContent className="dropdown-content">
              refers to the invisible, non-tangible tasks involved in running a household
              </DropDownContent>
            </AcronymM>
            <AcronymE className='Acronym'>
              Emotional Labor
              <DropDownContent className="dropdown-content">
                refers to the process of managing feelings and expressions
                to fulfill the emotional requirements of a job
              </DropDownContent>
            </AcronymE>
            <AcronymS className='Acronym'>
              Second-shift
              <DropDownContent className="dropdown-content">
                refers to the household duties that follow a paid work day
              </DropDownContent>
            </AcronymS>
            <AcronymI className='Acronym'>
              Invisible Work
              <DropDownContent className="dropdown-content">
                refers to unpaid work that goes unnoticed, unacknowledged, and thus, unregulated
              </DropDownContent>
            </AcronymI>
        </Description>
      </LandingPageBottom>
   </LandingPageContainer>
  );
}

LandingPage.propTypes = {
  user: PropTypes.any,
};

export default LandingPage;
