/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  CategoryTypeContainer,
  Img,
  Title,
  Left,
  Right,
} from './MemberCardElements';
import { getHouseholdTaskCardsByAssignedUser } from '../../../Helpers/Data/cardsData';
import AssignedMembersCards from '../AssignedMembersCards/AssignedMembersCards';

const MemberCards = ({
  id,
  userId,
  firstName,
  profilePicture,
  householdId,
}) => {
  const [taskCards, setTaskCards] = useState([]);
  console.warn(taskCards);
  useEffect(() => {
    getHouseholdTaskCardsByAssignedUser(householdId, userId).then((resp) => setTaskCards(resp));
  }, []);
  return (
    <CategoryTypeContainer key={id}>
        <Left>
          <Title>{firstName}</Title>
          <Img src={profilePicture}/>
        </Left>
      <Right>
      {taskCards?.map((taskCardInfo) => (
        <AssignedMembersCards
          key={taskCardInfo.cardId}
          cardId={taskCardInfo.cardId}
          dailyGrind={taskCardInfo.dailyGrind}
          cardName={taskCardInfo.cardName}
          householdId={householdId}
        />
      ))}
      </Right>
    </CategoryTypeContainer>
  );
};

MemberCards.propTypes = {
  id: PropTypes.string,
  firstName: PropTypes.string,
  profilePicture: PropTypes.string,
  householdId: PropTypes.any,
  userId: PropTypes.string,
};

export default MemberCards;
