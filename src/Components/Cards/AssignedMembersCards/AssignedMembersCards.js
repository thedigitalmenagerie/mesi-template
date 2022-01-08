/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import {
  CategoryTypeContainer,
  Img,
} from './AssigneMembersCardElements';
import daily from '../../../Assets/dailygrindBlack.png';

const AssignedMembersCards = ({
  cardId,
  dailyGrind,
  cardName,
}) => {
  return (
    <CategoryTypeContainer key={cardId}>
        {cardName}
        { dailyGrind !== true
          ? <div></div>
          : <Img src={daily}/>
        }
    </CategoryTypeContainer>
  );
};

AssignedMembersCards.propTypes = {
  cardId: PropTypes.string,
  cardName: PropTypes.string,
  dailyGrind: PropTypes.string,
  householdId: PropTypes.any
};

export default AssignedMembersCards;
