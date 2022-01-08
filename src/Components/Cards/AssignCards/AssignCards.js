/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  HouseholdCard,
  HouseholdTop,
  HouseholdTopLeft,
  HouseholdTopRight,
  HouseholdMiddle,
  HouseholdBottom,
  HouseholdBottomLeft,
  HouseholdBottomRight,
  HouseholdCardImg,
  Button,
  Modal,
  ValueButton,
  ValueButtonImg,
  ValueButtonImg2,
  HouseholdBottomLeftInner
} from './AssignCardElements';
import assign from '../../../Assets/assignUser.png';
import daily from '../../../Assets/dailyGrindPink.png';
import AssignUserForm from '../../Forms/AssignUserForm/AssignUserForm';
import exit from '../../../Assets/exitModalLightGreen.png';

export const AssignCards = ({
  householdMembers,
  assignedUserId,
  cardId,
  householdId,
  needTypeId,
  categoryTypeId,
  cardName,
  cardImage,
  cardDefinition,
  conception,
  planning,
  execution,
  msoc,
  dailyGrind,
  households,
  user,
  steps,
  users,
  needTypeName,
  categoryTypeName,
  setHouseholdTaskCards,
}) => {
  const history = useHistory();

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleClick = (type) => {
    switch (type) {
      case 'view':
        history.push(`/dashboard/${householdId}/cards/${cardId}`);
        break;
      default:
        console.warn('Nothing selected');
    }
  };

  return (
    <>
    {modalIsOpen
      ? <Modal
          className='Modal'
          isOpen={modalIsOpen}
        >
          <Button className='modalClose' onClick={closeModal}>
            <ValueButtonImg src={exit}/>
          </Button>
          <AssignUserForm
            householdMembers={householdMembers}
            setHouseholdTaskCards={setHouseholdTaskCards}
            assignedUserId={assignedUserId}
            cardId={cardId}
          householdId={householdId}
          needTypeId={needTypeId}
          categoryTypeId={categoryTypeId}
          cardName={cardName}
          cardImage={cardImage}
          cardDefinition={cardDefinition}
          conception={conception}
          planning={planning}
          execution={execution}
          msoc={msoc}
          dailyGrind={dailyGrind}
          households={households}
          user={user}
          steps={steps}
          users={users}
      />
    </Modal>
      : <HouseholdCard className='HouseholdCard' key={cardId} id='HouseholdCard'>
      <HouseholdTop className='HouseholdTop'>
        <HouseholdTopLeft className='HouseholdTopLeft'>
            {categoryTypeName}
        </HouseholdTopLeft>
        <HouseholdTopRight className="HouseholdTopRight">
          {cardName}
        </HouseholdTopRight>
      </HouseholdTop>
      <HouseholdMiddle className="HouseholdMiddle">
          <Button className="HouseholdCardButton">
            <HouseholdCardImg className='HouseholdCardImg' src={cardImage} onClick={() => handleClick('view')} />
          </Button>
        </HouseholdMiddle>
      <HouseholdBottom className="HouseholdBottom">
          <HouseholdBottomLeft className="HouseholdBottomLeft">
            <HouseholdBottomLeftInner className="HouseholdBottomLeftInner">
              { (dailyGrind === true)
                ? <div></div>
                : <ValueButtonImg2 src={daily}/>
              }
              {needTypeName}
            </HouseholdBottomLeftInner>
          </HouseholdBottomLeft>
          <HouseholdBottomRight className="HouseholdBottomRight">
              <ValueButton>
                <ValueButtonImg src={assign} onClick={openModal}/>
              </ValueButton>
          </HouseholdBottomRight>
        </HouseholdBottom>
    </HouseholdCard>
    }
    </>
  );
};

AssignCards.propTypes = {
  householdMembers: PropTypes.string,
  cardId: PropTypes.string,
  householdId: PropTypes.string,
  needTypeId: PropTypes.string,
  categoryTypeId: PropTypes.string,
  cardName: PropTypes.string,
  cardImage: PropTypes.string,
  cardDefinition: PropTypes.string,
  conception: PropTypes.string,
  planning: PropTypes.string,
  execution: PropTypes.string,
  msoc: PropTypes.string,
  dailyGrind: PropTypes.bool,
  households: PropTypes.any,
  user: PropTypes.any,
  steps: PropTypes.any,
  needTypeName: PropTypes.string,
  categoryTypeName: PropTypes.string,
  users: PropTypes.any,
  assignedUserId: PropTypes.string,
  setHouseholdTaskCards: PropTypes.func,
};

export default AssignCards;
