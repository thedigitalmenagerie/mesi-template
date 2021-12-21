/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
/* eslint-disable prefer-destructuring */
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  CommunityAgreementContainer,
  CommunityAgreementWrapper,
  Title,
  Subtitle,
  CommunityAgreementRules,
  CommunityAgreementTitle,
  RuleText,
  RuleTitle,
  CommunityAgreementButton,
} from './CommunityAgreementElements';
import NavBar from '../../Components/NavBar/NavBar';
import { getSingleHouseholdMember, updateHouseholdMember } from '../../Helpers/Data/householdMembersData';

export const CommunityAgreement = ({
  user,
}) => {
  const { householdId } = useParams();
  const history = useHistory();

  const redirect = () => {
    history.push(`/dashboard/${householdId}`);
  };

  const [userAgreement, setUserAgreement] = useState([]);
  const [userAgreementToUpdate, setUserAgreementToUpdate] = useState([]);
  console.warn(userAgreement);
  console.warn(userAgreementToUpdate);

  useEffect(() => {
    getSingleHouseholdMember(householdId).then((response) => setUserAgreement(response));
    const userToUpdate = {
      householdId,
      userId: user.id,
      communityAgreement: true,
      newVow: false,
      reDeal: false,
    };
    userAgreementToUpdate.push(userToUpdate);
    console.warn(userToUpdate);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userAgreement.userId === user.id) {
      updateHouseholdMember(userAgreementToUpdate.id, userAgreementToUpdate).then((response) => setUserAgreementToUpdate(response));
    } else {
      console.warn(userAgreement);
    }
  };

  return (
    <CommunityAgreementContainer className="CommunityAgreementContainer" id="CommunityAgreementContainer">
      <NavBar user={user}/>
      <CommunityAgreementWrapper className="CommunityAgreementWrapper" id="CommunityAgreements">
        <CommunityAgreementTitle className="CommunityAgreementTitle">
          <Title className="Title">PHASE ONE:</Title>
          <Subtitle className="subTitle">Set The Ground Rules with a Community Agreement</Subtitle>
        </CommunityAgreementTitle>
        <CommunityAgreementRules className="CommunityAgreementRules">
          <RuleTitle className="RuleTitle">WE AGREE TO</RuleTitle>
          <RuleText className="RuleText">listen to each other as we thoughtfully discuss all that it takes to run a home.</RuleText>
          <RuleTitle className="RuleTitle">WE AGREE TO</RuleTitle>
          <RuleText className="RuleText">consider our tone, brevity, and word choice as we chare information and our individual perspectives.</RuleText>
          <RuleTitle className="RuleTitle">WE AGREE TO</RuleTitle>
          <RuleText className="RuleText">explore a new way to collaboratively work together as a team to create more efficiency and fairness in our domestic ecosystem.</RuleText>
          <RuleTitle className="RuleTitle">WE AGREE TO</RuleTitle>
          <RuleText className="RuleText">value each other&apos;s time equally.</RuleText>
          <RuleTitle className="RuleTitle">WE AGREE TO</RuleTitle>
          <RuleText className="RuleText">keep ourselves free from distraction and focus on one another and the task at hand.</RuleText>
        </CommunityAgreementRules>
        <CommunityAgreementButton className="CommunityAgreementButton" type="submit" onSubmit={handleSubmit} onClick={redirect}>AGREE</CommunityAgreementButton>
        </CommunityAgreementWrapper>
      </CommunityAgreementContainer>
  );
};

CommunityAgreement.propTypes = {
  user: PropTypes.any,
  steps: PropTypes.any,
  users: PropTypes.any,
};

export default CommunityAgreement;
