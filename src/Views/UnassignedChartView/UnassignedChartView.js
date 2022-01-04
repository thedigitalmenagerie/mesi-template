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

export const UnassignedChartView = ({
  user,
}) => {
  const [householdTaskCards, setHouseholdTaskCards] = useState([]);
  const { householdId } = useParams();
  console.warn(householdTaskCards);

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
