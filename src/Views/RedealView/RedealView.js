import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import {
  HouseholdTaskCardContainer,
  HouseholdTaskCardWrapper,
  HouseholdTaskCardBottomRow,
  ButtonImg,
  Button,
  ButtonContainer,
  Modal,
} from './RedealViewElements';
import NavBar from '../../Components/NavBar/NavBar';
import { getHouseholdTaskCardsByAssignedUser } from '../../Helpers/Data/cardsData';
import { RedealCards } from '../../Components/Cards/RedealCards/RedealCards';
import redeal from '../../Assets/redealTan.png';
import exitModal from '../../Assets/exitModal.png';
import RedealForms from '../../Components/Forms/RedealForm/RedealForm';

export const RedealView = ({
  user,
}) => {
  const [assignedCards, setAssignedCards] = useState([]);
  const { householdId } = useParams();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  console.warn(assignedCards);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    getHouseholdTaskCardsByAssignedUser(householdId, user.id).then((resp) => setAssignedCards(resp));
  }, []);

  return (
    <HouseholdTaskCardContainer className='HouseholdTaskCardContainer' id='HouseholdTaskContainer'>
      <NavBar user={user} />
      <HouseholdTaskCardWrapper className='HouseholdTaskCardWrapper' id='Households'>
        <Button onClick={openModal}><ButtonImg src={redeal}/>REDEAL THE DECK </Button>
        <HouseholdTaskCardBottomRow>
          {assignedCards?.map((assignedCard) => (
            <RedealCards
                  key={assignedCard.cardId}
                  assignedUserId={assignedCard.assignedUserId}
                  cardId={assignedCard.cardId}
                  householdId={assignedCard.householdId}
                  needTypeId={assignedCard.needTypeId}
                  categoryTypeId={assignedCard.categoryTypeId}
                  cardName={assignedCard.cardName}
                  cardImage={assignedCard.cardImage}
                  cardDefinition={assignedCard.cardDefinition}
                  conception={assignedCard.conception}
                  planning={assignedCard.planning}
                  execution={assignedCard.execution}
                  msoc={assignedCard.msoc}
                  dailyGrind={assignedCard.dailyGrind}
                  needTypeName={assignedCard.needTypeName}
                  categoryTypeName={assignedCard.categoryTypeName}
                  setAssignedCards={setAssignedCards}
                  user={user}
                />
          ))}
          </HouseholdTaskCardBottomRow>
          <Modal isOpen={modalIsOpen} className='Modal'>
            <ButtonContainer>
              <Button className='modalClose' onClick={closeModal}>
                <ButtonImg src={exitModal} />
              </Button>
            </ButtonContainer>
            <RedealForms
              onClick={closeModal}
              householdId={householdId}
            />
          </Modal>
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
