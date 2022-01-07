/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import {
  DGCardContainer
} from './DGCardElements';

const DGCards = ({
  id,
  cardName,
}) => {
  return (
    <DGCardContainer key={id}>
      {cardName}
    </DGCardContainer>
  );
};

DGCards.propTypes = {
  id: PropTypes.string,
  cardName: PropTypes.string,
  householdId: PropTypes.any
};

export default DGCards;
