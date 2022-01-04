import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import {
  HouseholdTaskCardContainer,
  HouseholdTaskCardWrapper,
} from './RedealViewElements';
import NavBar from '../../Components/NavBar/NavBar';
import { getHouseholdTaskCardsByAssignedUser } from '../../Helpers/Data/cardsData';

export const RedealView = ({
  user,
}) => {
//   const [assignedCards, setAssignedCards] = useState([]);
  const { householdId } = useParams();

  useEffect(() => {
    getHouseholdTaskCardsByAssignedUser(householdId, user.id).then((resp) => console.warn(resp));
  }, []);

  return (
    <HouseholdTaskCardContainer className='HouseholdTaskCardContainer' id='HouseholdTaskContainer'>
      <NavBar user={user} />
      <HouseholdTaskCardWrapper className='HouseholdTaskCardWrapper' id='Households'>
          {/* {householdTaskCards?.map((householdTaskCardInfo) => (
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
        } */}
      </HouseholdTaskCardWrapper>
    </HouseholdTaskCardContainer>
  );
};

RedealView.propTypes = {
  householdMembers: PropTypes.any,
  households: PropTypes.any,
  user: PropTypes.any,
  steps: PropTypes.any,
  users: PropTypes.any,
};

export default RedealView;
