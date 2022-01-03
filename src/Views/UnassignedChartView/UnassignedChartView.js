import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import {
  HouseholdTaskCardContainer,
  HouseholdTaskCardWrapper,
  HouseholdTaskCardTopRow,
  HouseholdTaskCardBottomRow,
} from './UnassignedChartViewElements';
import NavBar from '../../Components/NavBar/NavBar';
import { getHouseholdTaskCards } from '../../Helpers/Data/cardsData';
import { getUserDeclarationByCard } from '../../Helpers/Data/userDeclarationData';

export const UnassignedChartView = ({
  user,
  householdMembers,
}) => {
  const [householdTaskCards, setHouseholdTaskCards] = useState([]);
  const declarations = [];
  const dailyGrind = [];
  const home = [];
  const out = [];
  const caregiving = [];
  const wild = [];
  const magic = [];
  console.warn(householdMembers);

  householdTaskCards.forEach((taskCard) => {
    getUserDeclarationByCard(taskCard.cardId).then((resp) => declarations.push(resp));
    if (taskCard.dailyGrind === true) {
      dailyGrind.push(taskCard);
    }
    if (taskCard.categoryTypeName === 'Home') {
      home.push(taskCard);
    }
    if (taskCard.categoryTypeName === 'Out') {
      out.push(taskCard);
    }
    if (taskCard.categoryTypeName === 'Wild') {
      wild.push(taskCard);
    }
    if (taskCard.categoryTypeName === 'Caregiving') {
      caregiving.push(taskCard);
    }
    if (taskCard.categoryTypeName === 'Magic') {
      magic.push(taskCard);
    }
  });
  //   console.warn(dailyGrind);
  //   console.warn(home);
  //   console.warn(out);
  //   console.warn(wild);
  //   console.warn(caregiving);
  //   console.warn(magic);
  console.warn(declarations);
  const { householdId } = useParams();

  useEffect(() => {
    getHouseholdTaskCards(householdId).then((resp) => setHouseholdTaskCards(resp));
  }, []);

  return (
    <HouseholdTaskCardContainer className='HouseholdTaskCardContainer' id='HouseholdTaskContainer'>
      <NavBar user={user} />
      <HouseholdTaskCardWrapper className='HouseholdTaskCardWrapper' id='Households'>
        <HouseholdTaskCardTopRow className='HouseholdTaskCardTopRow'>
        </HouseholdTaskCardTopRow>
        <HouseholdTaskCardBottomRow className="HouseholdTaskCardBottomRow">
        </HouseholdTaskCardBottomRow>
      </HouseholdTaskCardWrapper>
    </HouseholdTaskCardContainer>
  );
};

UnassignedChartView.propTypes = {
  householdMembers: PropTypes.any,
  households: PropTypes.any,
  user: PropTypes.any,
  steps: PropTypes.any,
  users: PropTypes.any,
};

export default UnassignedChartView;
