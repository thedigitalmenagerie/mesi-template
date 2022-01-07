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
  ValueButton,
  ValueButtonImg,
  ValueButtonImg2,
  HouseholdBottomLeftInner
} from './RedealCardElements';
import daily from '../../../Assets/dailyGrindPink.png';

export const RedealCards = ({
  cardId,
  householdId,
  cardName,
  cardImage,
  dailyGrind,
  needTypeName,
  categoryTypeName,
  user
}) => {
  const history = useHistory();

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
                <ValueButtonImg src={user.profilePicture}/>
              </ValueButton>
          </HouseholdBottomRight>
        </HouseholdBottom>
    </HouseholdCard>
  );
};

RedealCards.propTypes = {
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

export default RedealCards;
