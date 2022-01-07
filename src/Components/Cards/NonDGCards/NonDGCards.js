/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Top,
  Bottom,
  NonDGCardContainer
} from './NonDGCardElements';
import { getUserDeclarationByCardUV } from '../../../Helpers/Data/userDeclarationData';
import UserValues from '../UserValues/UserValues';

const NonDGCards = ({
  id,
  cardName,
}) => {
  const [declarations, setDeclarations] = useState([]);
  console.warn(id);
  console.warn(declarations);

  useEffect(() => {
    getUserDeclarationByCardUV(id).then((response) => setDeclarations(response));
  }, []);
  return (
    <NonDGCardContainer key={id}>
      <Top>
        {cardName}
      </Top>
      <Bottom>
        {declarations?.map((declarationInfo) => (
          <UserValues
            key={declarationInfo.id}
            id={declarationInfo.id}
            profilePicture={declarationInfo.profilePicture}
          />
        ))}
      </Bottom>
    </NonDGCardContainer>
  );
};

NonDGCards.propTypes = {
  id: PropTypes.string,
  cardName: PropTypes.string,
  householdId: PropTypes.any
};

export default NonDGCards;
