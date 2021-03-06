/* eslint-disable no-nested-ternary */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  FormTitle,
  Row,
} from './RedealFormElements';
import { getHousehold, updateHousehold } from '../../../Helpers/Data/householdData';
import { getTaskCards, updateCard } from '../../../Helpers/Data/cardsData';

export default function RedealForms({ householdId }) {
  const history = useHistory();
  const [household, setHousehold] = useState({});
  const [cards, setCards] = useState([]);
  console.warn(cards);

  useEffect(() => {
    getHousehold(householdId).then((resp) => setHousehold(resp));
    getTaskCards(householdId).then((resp) => setCards(resp));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    household.forEach((currentHouse) => {
      const house = {
        id: householdId,
        householdName: currentHouse.householdName,
        hasPets: currentHouse.hasPets,
        hasKids: currentHouse.hasKids,
        hasRomance: currentHouse.hasRomance,
        stepId: 'BCBD1E56-4601-4A17-8A1C-F23E6975FF5F',
      };
      updateHousehold(householdId, house);
    });
    cards.forEach((card) => {
      const cardToUpdate = {
        assignedUserId: card.null,
        cardDefinition: card.cardDefinition,
        id: card.id,
        cardImage: card.cardImage,
        cardName: card.cardName,
        categoryTypeId: card.categoryTypeId,
        conception: card.conception,
        dailyGrind: card.dailyGrind,
        execution: card.execution,
        householdId: card.householdId,
        msoc: card.msoc,
        needTypeId: card.needTypeId,
        planning: card.planning,
      };
      updateCard(card.id, cardToUpdate);
    });
    history.push('/dashboard');
  };

  return (
        <Form
          id='HouseholdForm'
          autoComplete='off'
          onSubmit={handleSubmit}
          className='householdForm'
        >
          <FormTitle className='formTitle'>REDEAL THE DECK</FormTitle>
          <Row>
              Are you sure you want to redeal the deck and unassign all users from task cards, reverting back to phase 4?
          </Row>
          <Button className='addCategory' type='submit'>
            REDEAL
          </Button>
        </Form>
  );
}

RedealForms.propTypes = {
  householdId: PropTypes.string,
  cardId: PropTypes.string,
};
