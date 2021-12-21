/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
import React from 'react';
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
  HouseholdBottomRow,
} from './DashElements';
import NavBar from '../../Components/NavBar/NavBar';
import add from '../../Assets/addHouseholdButton.png';
import exitModal from '../../Assets/exitModal.png';

export const Dash = ({
  user,
  steps,
  users,
  households,
  setHouseholds
}) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

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
          <HouseholdBottomRow>
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
              householdId={householdInfo.householdId}
              householdName={householdInfo.householdName}
              hasPets={householdInfo.hasPets}
              hasKids={householdInfo.hasKids}
              hasRomance={householdInfo.hasRomance}
              stepName={householdInfo.stepName}
              setHouseholds={setHouseholds}
              households={households}
              user={user}
              steps={steps}
              users={users}
            />
          ))}
          </HouseholdBottomRow>
        </HouseholdWrapper>
      </HouseholdContainer>
  );
};

Dash.propTypes = {
  households: PropTypes.any,
  setHouseholds: PropTypes.func,
  user: PropTypes.any,
  steps: PropTypes.any,
  users: PropTypes.any,
};

export default Dash;
