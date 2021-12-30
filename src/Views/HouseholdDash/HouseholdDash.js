/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import {
  HouseholdTaskCardContainer,
  HouseholdTaskCardWrapper,
  AddButtonContainer,
  AddHouseholdTaskCardButton,
  AddHouseholdTaskCardButtonImg,
  Button,
  ButtonImg,
  Modal,
  HouseholdTaskCardTopRow,
  ButtonContainer,
  HouseholdTaskCardBottomRow,
} from './HouseholdElements';
import HouseholdTaskForms from '../../Components/Forms/CardForms/HouseholdTaskForms';
import { HouseholdTaskCards } from '../../Components/Cards/TaskCards/TaskCards';
import NavBar from '../../Components/NavBar/NavBar';
import add from '../../Assets/addHouseholdButton.png';
import exitModal from '../../Assets/exitModal.png';
import { getUndeclaredCards } from '../../Helpers/Data/cardsData';

export const HouseholdDash = ({
  user,
  households,
  householdMembers,
  steps,
  users
}) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [householdTaskCards, setHouseholdTaskCards] = useState([]);
  const { householdId } = useParams();

  useEffect(() => {
    getUndeclaredCards(user.id, householdId).then((resp) => setHouseholdTaskCards(resp));
  }, []);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <HouseholdTaskCardContainer className='HouseholdTaskCardContainer' id='HouseholdTaskContainer'>
      <NavBar user={user} />
      <HouseholdTaskCardWrapper className='HouseholdTaskCardWrapper' id='Households'>
        <HouseholdTaskCardTopRow className='HouseholdTaskCardTopRow'>
          TASK CARDS
          <AddButtonContainer className='AddButtonContainer'>
            <AddHouseholdTaskCardButton className='addHousehold' onClick={openModal}>
              <AddHouseholdTaskCardButtonImg
                className='AddHouseholdButtonImg'
                src={add}
              />
            </AddHouseholdTaskCardButton>
          </AddButtonContainer>
        </HouseholdTaskCardTopRow>
        <HouseholdTaskCardBottomRow className="HouseholdTaskCardBottomRow">
          {householdTaskCards?.map((householdTaskCardInfo) => (
            <HouseholdTaskCards
              key={householdTaskCardInfo.cardId}
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
        <Modal isOpen={modalIsOpen} className='Modal'>
            <ButtonContainer>
              <Button className='modalClose' onClick={closeModal}>
                <ButtonImg src={exitModal} />
              </Button>
            </ButtonContainer>
            <HouseholdTaskForms
              householdMembers={householdMembers}
              households={households}
              setHouseholdTaskCards={setHouseholdTaskCards}
              steps={steps}
              users={users}
              user={user}
            />
          </Modal>
      </HouseholdTaskCardWrapper>
    </HouseholdTaskCardContainer>
  );
};

HouseholdDash.propTypes = {
  householdMembers: PropTypes.any,
  households: PropTypes.any,
  user: PropTypes.any,
  steps: PropTypes.any,
  users: PropTypes.any,
};

export default HouseholdDash;
