/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  NavBarContainer,
  Img,
  LogoImg,
  NavLeft,
  NavRight,
  NavRightMessage,
  SignOutButtonContianer,
  SignOutButtonImg,
  SignOutButton,
  LogoButton
} from './NavBarElements';
import LOGO from '../../Assets/LOGO.png';
import exit from '../../Assets/signOut.png';
import faq from '../../Assets/faq.png';
import { signOutUser } from '../../Helpers/auth';

function NavBar({ user }) {
  return (
    <NavBarContainer className='NavBarContainer'>
        <NavLeft className="NavLeft">
          <Link to='/dashboard'>
            <LogoButton>
              <LogoImg src={LOGO}/>
            </LogoButton>
          </Link>
        </NavLeft>
        <Link to='/howTo'>
            <LogoButton>
              <Img src={faq}/>
            </LogoButton>
          </Link>
        <NavRight className="NavRight">
        <Img src={user.profilePicture}/>
        <NavRightMessage className="NavRightMessage">
            Welcome, {user.firstName}!
        </NavRightMessage>
        <SignOutButtonContianer>
            <SignOutButton onClick={signOutUser}>
                <SignOutButtonImg src={exit}/>
            </SignOutButton>
        </SignOutButtonContianer>
        </NavRight>
   </NavBarContainer>
  );
}

NavBar.propTypes = {
  user: PropTypes.any,
};

export default NavBar;
