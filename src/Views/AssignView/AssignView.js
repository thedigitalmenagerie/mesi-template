import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useParams } from 'react-router-dom';
import {
  HouseholdTaskCardContainer,
  HouseholdTaskCardWrapper,
  HouseholdTaskCardBottomRow,
  CommunityAgreementWrapper,
  Title,
  Subtitle,
  CommunityAgreementTitle,
  Button,
  ButtonContainer
} from './AssignViewElements';
import { AssignCards } from '../../Components/Cards/AssignCards/AssignCards';
import NavBar from '../../Components/NavBar/NavBar';
import { getHouseholdTaskCards } from '../../Helpers/Data/cardsData';
import { getHousehold, updateHousehold } from '../../Helpers/Data/householdData';

export const AssignView = ({
  user,
  households,
  householdMembers,
  steps,
  users
}) => {
  const { householdId } = useParams();
  const history = useHistory();
  const [householdTaskCards, setHouseholdTaskCards] = useState([]);
  const [household, setHousehold] = useState([]);
  console.warn(householdTaskCards);

  const handleClick = () => {
    household.forEach((currentHouse) => {
      const house = {
        id: householdId,
        householdName: currentHouse.householdName,
        hasPets: currentHouse.hasPets,
        hasKids: currentHouse.hasKids,
        hasRomance: currentHouse.hasRomance,
        stepId: '4BA2F839-82D7-49BE-A549-71DD4AB0152D',
      };
      updateHousehold(householdId, house);
      history.push(`/dashboard/${householdId}/assignedChartView`);
    });
  };

  useEffect(() => {
    getHouseholdTaskCards(householdId).then((resp) => setHouseholdTaskCards(resp));
    getHousehold(householdId).then((resp) => setHousehold(resp));
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
                <Title className='Title'>Your household has assigned all users.</Title>
                <Subtitle className='subTitle'>
                  Please proceed to the assigned user chart to view each members task list.
                </Subtitle>
                <ButtonContainer>
                <Button onClick={handleClick}>VIEW CHART</Button>
                  </ButtonContainer>
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
