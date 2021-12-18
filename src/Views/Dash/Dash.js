/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import HouseholdForms from '../../Components/Forms/HouseholdForms/HouseholdForm';
import { HouseholdCards } from '../../Components/Cards/HouseholdCards/HouseholdCards';
import {
  HouseholdContainer,
  HouseholdWrapper,
  AddButtonContainer,
  AddHouseholdButton,
  AddHouseholdButtonImg,
  Button,
  ButtonImg,
  Modal,
  HouseholdTopRow,
  ButtonContainer,
} from './DashElements';
import { getHouseholdWithDetails } from '../../Helpers/Data/householdMembersData';
import NavBar from '../../Components/NavBar/NavBar';
import add from '../../Assets/addHouseholdButton.png';
import exitModal from '../../Assets/exitModal.png';

export const Dash = ({ user, steps, users }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [households, setHouseholds] = useState([]);

  useEffect(() => {
    getHouseholdWithDetails(user.id).then((householdArray) => setHouseholds(householdArray));
  }, []);
  console.warn(user.id);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <HouseholdContainer className="HouseholdContainer" id="HouseholdContainer">
      <NavBar user={user}/>
      <HouseholdWrapper className="HouseholdWrapper" id="Households">
      <HouseholdTopRow>
            SHARED SPACES
          <AddButtonContainer className="AddButtonContainer">
            <AddHouseholdButton className="addHousehold" onClick={openModal}>
              <AddHouseholdButtonImg className="AddHouseholdButtonImg" src={add}/>
            </AddHouseholdButton>
          </AddButtonContainer>
          </HouseholdTopRow>
          <Modal
            isOpen={modalIsOpen}
            className="Modal"
          >
            <ButtonContainer>
              <Button className="modalClose" onClick={closeModal}>
                <ButtonImg src={exitModal}/>
              </Button>
            </ButtonContainer>
            <HouseholdForms
              setHouseholds={setHouseholds}
              households={households}
              steps={steps}
              users={users}
              user={user}
            />
          </Modal>
          {households?.map((householdInfo) => (
            <HouseholdCards
              key={householdInfo.id}
              id={householdInfo.id}
              householdName={householdInfo.householdName}
              hasPets={householdInfo.hasPets}
              hasKids={householdInfo.hasKids}
              hasRomance={householdInfo.hasRomance}
              stepId={householdInfo.stepdId}
              setHouseholds={setHouseholds}
              households={households}
              user={user}
              steps={steps}
              users={users}
            />
          ))}
        </HouseholdWrapper>
      </HouseholdContainer>
  );
};

Dash.propTypes = {
  households: PropTypes.any,
  setHouseholds: PropTypes.func,
  user: PropTypes.any,
};

export default Dash;
