/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getDGCardsByCTandHH, getNonDGCardsByCTandHH } from '../../../Helpers/Data/cardsData';
import {
  CategoryTypeContainer,
  Left,
  Right,
  Title,
} from './CTCardElements';
import NonDGCards from '../NonDGCards/NonDGCards';
import DGCards from '../DGCards/DGCards';

const CTCards = ({
  id,
  categoryTypeName,
  householdId,
}) => {
  const [dgCards, setDGCards] = useState([]);
  const [nonDGCards, setNonDGCards] = useState([]);
  useEffect(() => {
    getDGCardsByCTandHH(householdId, id).then((response) => setDGCards(response));
    getNonDGCardsByCTandHH(householdId, id).then((response) => setNonDGCards(response));
  }, []);
  return (
    <CategoryTypeContainer key={id}>
      <Title>{categoryTypeName}</Title>
      <Left>
      {dgCards?.map((dgCardInfo) => (
        <DGCards
          key={dgCardInfo.id}
          id={dgCardInfo.id}
          cardName={dgCardInfo.cardName}
          householdId={householdId}
        />
      ))}
      </Left>
      <Right>
      {nonDGCards?.map((nonDGCardInfo) => (
        <NonDGCards
          key={nonDGCardInfo.id}
          id={nonDGCardInfo.id}
          cardName={nonDGCardInfo.cardName}
          householdId={householdId}
        />
      ))}
      </Right>
    </CategoryTypeContainer>
  );
};

CTCards.propTypes = {
  id: PropTypes.string,
  categoryTypeName: PropTypes.string,
  householdId: PropTypes.any
};

export default CTCards;
