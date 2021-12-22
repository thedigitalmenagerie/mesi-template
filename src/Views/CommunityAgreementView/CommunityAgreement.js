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
import {
  getHouseholdMembers,
  updateHouseholdMember,
} from '../../Helpers/Data/householdMembersData';
import {
  getHousehold,
  updateHousehold,
} from '../../Helpers/Data/householdData';

export const CommunityAgreement = ({ user }) => {
  const { householdId } = useParams();
  const history = useHistory();
  const [household, setHousehold] = useState([]);
  const [userAgreement, setUserAgreement] = useState([]);
  const [agreeingMembers, setAgreeingMembers] = useState([]);

  useEffect(() => {
    getHousehold(householdId).then((response) => setHousehold(response));
    getHouseholdMembers(householdId).then((response) => setUserAgreement(response));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    userAgreement.forEach((singleMember) => {
      // for each member that has agreed, push them to the agreeing members array
      if (singleMember.communityAgreement === true) {
        agreeingMembers.push(singleMember);
        setAgreeingMembers();
        // if the agreeingMembers array is equal to the userAgreement array,
        // update the household step to 2
        if (agreeingMembers.length === userAgreement.length) {
          // for each household create the object with which to update
          household.forEach((currentHouse) => {
            const house = {
              id: householdId,
              householdName: currentHouse.householdName,
              hasPets: currentHouse.hasPets,
              hasKids: currentHouse.hasKids,
              hasRomance: currentHouse.hasRomance,
              stepId: '3C22C28B-1074-4BED-B3E5-D763BB3A6BC4',
            };
            updateHousehold(householdId, house);
            history.push(`/dashboard/${householdId}`);
          });
        }
        // else if the agreeingMembers array is not equal to the userAgreement array
        // and the current user communityAgreement does not equal true,
        // update the individual member communityAgreement to true
      } else if (
        singleMember.userId === user.id
        && householdId === singleMember.householdId
        && singleMember.communityAgreement !== true
      ) {
        const member = {
          id: singleMember.id,
          householdId,
          userId: user.id,
          communityAgreement: true,
          newVow: false,
          redeal: false,
        };
        updateHouseholdMember(singleMember.id, member);
        history.push(`/dashboard/${householdId}/awaitingOtherUsers`);
      } else if (
        singleMember.userId === user.id
        && householdId === singleMember.householdId
        && singleMember.communityAgreement === true
      ) {
        history.push(`/dashboard/${householdId}/awaitingOtherUsers`);
      }
      history.push(`/dashboard/${householdId}`);
    });
    history.push(`/dashboard/${householdId}`);
  };

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
          <Title className='Title'>PHASE ONE:</Title>
          <Subtitle className='subTitle'>
            Set The Ground Rules with a Community Agreement
          </Subtitle>
        </CommunityAgreementTitle>
        <CommunityAgreementRules className='CommunityAgreementRules'>
          <RuleTitle className='RuleTitle'>WE AGREE TO</RuleTitle>
          <RuleText className='RuleText'>
            listen to each other as we thoughtfully discuss all that it takes to
            run a home.
          </RuleText>
          <RuleTitle className='RuleTitle'>WE AGREE TO</RuleTitle>
          <RuleText className='RuleText'>
            consider our tone, brevity, and word choice as we chare information
            and our individual perspectives.
          </RuleText>
          <RuleTitle className='RuleTitle'>WE AGREE TO</RuleTitle>
          <RuleText className='RuleText'>
            explore a new way to collaboratively work together as a team to
            create more efficiency and fairness in our domestic ecosystem.
          </RuleText>
          <RuleTitle className='RuleTitle'>WE AGREE TO</RuleTitle>
          <RuleText className='RuleText'>
            value each other&apos;s time equally.
          </RuleText>
          <RuleTitle className='RuleTitle'>WE AGREE TO</RuleTitle>
          <RuleText className='RuleText'>
            keep ourselves free from distraction and focus on one another and
            the task at hand.
          </RuleText>
        </CommunityAgreementRules>
        <CommunityAgreementButton
          className='CommunityAgreementButton'
          type='submit'
          onClick={handleSubmit}
        >
          AGREE
        </CommunityAgreementButton>
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
