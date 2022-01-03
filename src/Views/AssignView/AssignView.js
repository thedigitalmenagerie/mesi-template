import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import {
  HouseholdTaskCardContainer,
  HouseholdTaskCardWrapper,
  HouseholdTaskCardBottomRow,
  CommunityAgreementWrapper,
  Title,
  Subtitle,
  CommunityAgreementTitle
} from './AssignViewElements';
import { AssignCards } from '../../Components/Cards/AssignCards/AssignCards';
import NavBar from '../../Components/NavBar/NavBar';
import { getHouseholdTaskCards } from '../../Helpers/Data/cardsData';

export const AssignView = ({
  user,
  households,
  householdMembers,
  steps,
  users
}) => {
  const [householdTaskCards, setHouseholdTaskCards] = useState([]);
  const { householdId } = useParams();
  console.warn(householdTaskCards);

  useEffect(() => {
    getHouseholdTaskCards(householdId).then((resp) => setHouseholdTaskCards(resp));
  }, []);

  return (
    <HouseholdTaskCardContainer className='HouseholdTaskCardContainer' id='HouseholdTaskContainer'>
      <NavBar user={user} />
      <HouseholdTaskCardWrapper className='HouseholdTaskCardWrapper' id='Households'>
        { householdTaskCards.length === 0
          ? <CommunityAgreementWrapper
              className='CommunityAgreementWrapper'
              id='CommunityAgreements'
            >
              <CommunityAgreementTitle className='CommunityAgreementTitle'>
                <Title className='Title'>You are currently waiting on other members of your household.</Title>
                <Subtitle className='subTitle'>
                  Return to your household when all users have completed this step to continue.
                </Subtitle>
              </CommunityAgreementTitle>
            </CommunityAgreementWrapper>
          : <HouseholdTaskCardBottomRow className="HouseholdTaskCardBottomRow">
          {householdTaskCards?.map((householdTaskCardInfo) => (
            <AssignCards
                  key={householdTaskCardInfo.cardId}
                  assignedUserId={householdTaskCardInfo.assignedUserId}
                  cardId={householdTaskCardInfo.cardId}
                  householdId={householdTaskCardInfo.householdId}
                  needTypeId={householdTaskCardInfo.needTypeId}
                  categoryTypeId={householdTaskCardInfo.categoryTypeId}
                  cardName={householdTaskCardInfo.cardName}
                  cardImage={householdTaskCardInfo.cardImage}
                  cardDefinition={householdTaskCardInfo.cardDefinition}
                  conception={householdTaskCardInfo.conception}
                  planning={householdTaskCardInfo.planning}
                  execution={householdTaskCardInfo.execution}
                  msoc={householdTaskCardInfo.msoc}
                  dailyGrind={householdTaskCardInfo.dailyGrind}
                  needTypeName={householdTaskCardInfo.needTypeName}
                  categoryTypeName={householdTaskCardInfo.categoryTypeName}
                  households={households}
                  householdMembers={householdMembers}
                  setHouseholdTaskCards={setHouseholdTaskCards}
                  user={user}
                  steps={steps}
                  users={users}
                />
          ))}
        </HouseholdTaskCardBottomRow>
        }
      </HouseholdTaskCardWrapper>
    </HouseholdTaskCardContainer>
  );
};

AssignView.propTypes = {
  householdMembers: PropTypes.any,
  households: PropTypes.any,
  user: PropTypes.any,
  steps: PropTypes.any,
  users: PropTypes.any,
};

export default AssignView;
