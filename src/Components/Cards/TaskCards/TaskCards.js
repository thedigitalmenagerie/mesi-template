/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import HouseholdForms from '../../Forms/HouseholdForms/HouseholdForm';
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
  HouseholdCardDelete,
  Button,
  Modal,
  ValueButton,
  ValueButtonImg,
  ValueButtonImg2,
  HouseholdBottomLeftInner
} from './TaskCardElements';
import value from '../../../Assets/value.png';
import daily from '../../../Assets/dailyGrindPink.png';

export const HouseholdTaskCards = ({
  householdMembers,
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
}) => {
  const history = useHistory();

  const handleClick = (type) => {
    switch (type) {
      case 'view':
        history.push(`/dashboard/${householdId}/cards/${cardId}`);
        break;
      case 'value':
        history.push(`/dashboard/${householdId}/cards/value/${cardId}`);
        break;
      default:
        console.warn('Nothing selected');
    }
  };

  return (
    <HouseholdCard className='HouseholdCard' key={cardId} id='HouseholdCard'>
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
                <ValueButtonImg src={value} onClick={() => handleClick('value')}/>
            </ValueButton>
          </HouseholdBottomRight>
        </HouseholdBottom>
        <Modal
          className='Modal'
        >
          <Button className='modalClose'>
            <HouseholdCardDelete/>
          </Button>
          <HouseholdForms
              householdMembers={householdMembers}
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
    </HouseholdCard>
  );
};

HouseholdTaskCards.propTypes = {
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
};

export default HouseholdTaskCards;
