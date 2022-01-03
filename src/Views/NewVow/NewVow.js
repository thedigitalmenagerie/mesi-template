/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
/* eslint-disable prefer-destructuring */
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  NewVowContainer,
  NewVowWrapper,
  Title,
  Subtitle,
  NewVowRules,
  NewVowTitle,
  RuleText,
  RuleTitle,
  NewVowButton,
} from './NewVowElements';
import NavBar from '../../Components/NavBar/NavBar';
import {
  getHouseholdMembers,
  updateHouseholdMember,
} from '../../Helpers/Data/householdMembersData';
import {
  getHousehold,
  updateHousehold,
} from '../../Helpers/Data/householdData';

export const NewVow = ({ user }) => {
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
      if (singleMember.newVow === true) {
        agreeingMembers.push(singleMember);
        setAgreeingMembers();
        // if the agreeingMembers array is equal to the userAgreement array,
        // update the household step to 2
        if (agreeingMembers.length === userAgreement.length) {
          console.warn(agreeingMembers.length, userAgreement.length);
          // for each household create the object with which to update
          household.forEach((currentHouse) => {
            const house = {
              id: householdId,
              householdName: currentHouse.householdName,
              hasPets: currentHouse.hasPets,
              hasKids: currentHouse.hasKids,
              hasRomance: currentHouse.hasRomance,
              stepId: '3513156D-0D47-4354-84AB-4F0EA9452CB5',
            };
            updateHousehold(householdId, house);
            history.push(`/dashboard/${householdId}`);
          });
        }
        // else if the agreeingMembers array is not equal to the userAgreement array
        // and the current user NewVow does not equal true,
      } else if (singleMember.userId === user.id && householdId === singleMember.householdId && singleMember.NewVow === true) {
        history.push(`/dashboard/${householdId}/awaitingOtherUsers`);
        // else if the agreeingMembers array is not equal to the userAgreement array
        // and the current user NewVow does not equal true,
        // update the individual member NewVow to true
      } else if (singleMember.userId === user.id && householdId === singleMember.householdId && singleMember.NewVow !== true) {
        const member = {
          id: singleMember.id,
          householdId,
          userId: user.id,
          communityAgreement: true,
          newVow: true,
          redeal: false,
        };
        updateHouseholdMember(singleMember.id, member);
        history.push(`/dashboard/${householdId}/awaitingOtherUsers`);
      } else {
        history.push(`/dashboard/${householdId}/awaitingOtherUsers`);
      }
    });
  };

  return (
    <NewVowContainer
      className='NewVowContainer'
      id='NewVowContainer'
    >
      <NavBar user={user} />
      <NewVowWrapper
        className='NewVowWrapper'
        id='NewVows'
      >
        <NewVowTitle className='NewVowTitle'>
          <Title className='Title'>PHASE FIVE:</Title>
          <Subtitle className='subTitle'>
          TAKE A NEW VOW
          </Subtitle>
        </NewVowTitle>
        <NewVowRules className='NewVowRules'>
          <RuleTitle className='RuleTitle'>I WILL</RuleTitle>
          <RuleText className='RuleText'>
          let go of resentment about the past.
          </RuleText>
          <RuleTitle className='RuleTitle'>I WILL</RuleTitle>
          <RuleText className='RuleText'>
          play my cards with full Conception, Planning, and and Execution (CPE).
          </RuleText>
          <RuleTitle className='RuleTitle'>I WILL</RuleTitle>
          <RuleText className='RuleText'>
          reliquish control of the cards that are not mine; no messing with your cards in the eleventh hour.
          </RuleText>
          <RuleTitle className='RuleTitle'>I WILL</RuleTitle>
          <RuleText className='RuleText'>
          adhere to our agreed-upon Minimum Standard of Care for each card I take; cut the criticism and nagging when things aren&apos;t done “my” way.
          </RuleText>
          <RuleTitle className='RuleTitle'>I WILL</RuleTitle>
          <RuleText className='RuleText'>
          re-deal individual cards as often as needed with clear and collaborative communication.
          </RuleText>
          <RuleTitle className='RuleTitle'>I WILL</RuleTitle>
          <RuleText className='RuleText'>
          claim my Unicorn Space, and support you as you take yours.
          </RuleText>
          <RuleTitle className='RuleTitle'>I WILL</RuleTitle>
          <RuleText className='RuleText'>
          make regular time to check in with you; practice makes perfect.
          </RuleText>
        </NewVowRules>
        <NewVowButton
          className='NewVowButton'
          type='submit'
          onClick={handleSubmit}
        >
          AGREE
        </NewVowButton>
      </NewVowWrapper>
    </NewVowContainer>
  );
};

NewVow.propTypes = {
  user: PropTypes.any,
  steps: PropTypes.any,
  users: PropTypes.any,
};

export default NewVow;
