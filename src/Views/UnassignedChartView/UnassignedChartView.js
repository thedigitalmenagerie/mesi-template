import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  HouseholdTaskCardContainer,
  HouseholdTaskCardWrapper,
  HouseholdTaskCardTopRow,
  HouseholdTaskCardBottomRow,
  Button,
} from './UnassignedChartViewElements';
import NavBar from '../../Components/NavBar/NavBar';
import { getCategoryTypes } from '../../Helpers/Data/categoryTypeData';
import CTCards from '../../Components/Cards/CTCards/CTCards';
import { getHousehold, updateHousehold } from '../../Helpers/Data/householdData';

export const UnassignedChartView = ({
  user,
}) => {
  const { householdId } = useParams();
  const history = useHistory();
  const [categoryTypes, setCategoryTypes] = useState([]);
  const [household, setHousehold] = useState([]);

  const handleClick = () => {
    household.forEach((currentHouse) => {
      const house = {
        id: householdId,
        householdName: currentHouse.householdName,
        hasPets: currentHouse.hasPets,
        hasKids: currentHouse.hasKids,
        hasRomance: currentHouse.hasRomance,
        stepId: 'A79221D7-5CE4-4D42-ADED-C0C9ED1CDBCF',
      };
      updateHousehold(householdId, house);
      history.push('/dashboard');
    });
  };

  useEffect(() => {
    getCategoryTypes().then((response) => setCategoryTypes(response));
    getHousehold(householdId).then((response) => setHousehold(response));
  }, []);

  return (
    <HouseholdTaskCardContainer className='HouseholdTaskCardContainer' id='HouseholdTaskContainer'>
      <NavBar user={user} />
      <HouseholdTaskCardWrapper className='HouseholdTaskCardWrapper' id='Households'>
        <HouseholdTaskCardTopRow className='HouseholdTaskCardTopRow'>
          <Button onClick={handleClick}>NEXT</Button>
        </HouseholdTaskCardTopRow>
        <HouseholdTaskCardBottomRow className="HouseholdTaskCardBottomRow">
          {categoryTypes?.map((categoryTypeInfo) => (
            <CTCards
                  key={categoryTypeInfo.id}
                  id={categoryTypeInfo.id}
                  categoryTypeName={categoryTypeInfo.categoryTypeName}
                  householdId={householdId}
                />
          ))}
        </HouseholdTaskCardBottomRow>
      </HouseholdTaskCardWrapper>
    </HouseholdTaskCardContainer>
  );
};

UnassignedChartView.propTypes = {
  id: PropTypes.string,
  households: PropTypes.any,
  categoryTypeName: PropTypes.string,
  user: PropTypes.any,
};

export default UnassignedChartView;
