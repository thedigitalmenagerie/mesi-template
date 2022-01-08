/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  HouseholdTaskCardContainer,
  HouseholdTaskCardWrapper,
  HouseholdTaskCardTopRow,
  HouseholdTaskCardBottomRow,
  Button,
} from './AssignedChartViewElements';
import NavBar from '../../Components/NavBar/NavBar';
import { getHouseholdMembersWithUserInfo } from '../../Helpers/Data/householdMembersData';
import MemberCards from '../../Components/Cards/MemberCards/MemberCards';
import { getHousehold, updateHousehold } from '../../Helpers/Data/householdData';

export const AssignedChartView = ({
  user,
}) => {
  const { householdId } = useParams();
  const history = useHistory();
  const [householdMembers, setHouseholdMembers] = useState([]);
  const [houses, setHouses] = useState([]);

  const handleClick = () => {
    houses.forEach((currentHouse) => {
      const house = {
        id: householdId,
        householdName: currentHouse.householdName,
        hasPets: currentHouse.hasPets,
        hasKids: currentHouse.hasKids,
        hasRomance: currentHouse.hasRomance,
        stepId: '3513156D-0D47-4354-84AB-4F0EA9452CB5',
      };
      updateHousehold(householdId, house);
      history.push('/dashboard');
    });
  };

  useEffect(() => {
    getHouseholdMembersWithUserInfo(householdId).then((resp) => setHouseholdMembers(resp));
    getHousehold(householdId).then((response) => setHouses(response));
  }, []);

  return (
    <HouseholdTaskCardContainer className='HouseholdTaskCardContainer' id='HouseholdTaskContainer'>
      <NavBar user={user} />
      <HouseholdTaskCardWrapper className='HouseholdTaskCardWrapper' id='Households'>
        <HouseholdTaskCardTopRow className='HouseholdTaskCardTopRow'>
          <Button onClick={handleClick}>NEXT</Button>
        </HouseholdTaskCardTopRow>
        <HouseholdTaskCardBottomRow className="HouseholdTaskCardBottomRow">
          {householdMembers?.map((householdMemberInfo) => (
            <MemberCards
                  key={householdMemberInfo.id}
                  id={householdMemberInfo.id}
                  userId={householdMemberInfo.userId}
                  householdId={householdId}
                  firstName={householdMemberInfo.firstName}
                  profilePicture={householdMemberInfo.profilePicture}
                />
          ))}
        </HouseholdTaskCardBottomRow>
      </HouseholdTaskCardWrapper>
    </HouseholdTaskCardContainer>
  );
};

AssignedChartView.propTypes = {
  id: PropTypes.string,
  households: PropTypes.any,
  categoryTypeName: PropTypes.string,
  user: PropTypes.any,
};

export default AssignedChartView;
