/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
/* eslint-disable prefer-destructuring */
import React from 'react';
import PropTypes from 'prop-types';
import {
  CommunityAgreementContainer,
  CommunityAgreementWrapper,
  Title,
  Subtitle,
  CommunityAgreementTitle,
} from './WaitingViewElements';
import NavBar from '../../Components/NavBar/NavBar';

export const WaitingView = ({ user }) => {
  return (
    <CommunityAgreementContainer
      className='CommunityAgreementContainer'
      id='CommunityAgreementContainer'
    >
      <NavBar user={user} />
      <CommunityAgreementWrapper
        className='CommunityAgreementWrapper'
        id='CommunityAgreements'
      >
        <CommunityAgreementTitle className='CommunityAgreementTitle'>
          <Title className='Title'>You are currently waiting on other members of your household</Title>
          <Subtitle className='subTitle'>
            Return to your household when all users have completed this step to continue.
          </Subtitle>
        </CommunityAgreementTitle>
      </CommunityAgreementWrapper>
    </CommunityAgreementContainer>
  );
};

WaitingView.propTypes = {
  user: PropTypes.any,
};

export default WaitingView;
