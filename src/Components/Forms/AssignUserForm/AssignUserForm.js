/* eslint-disable no-nested-ternary */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import {
  Button,
  Form,
  FormTitle,
  Row,
  Option,
  Select,
} from './AssignUserElements';
import { getHouseholdTaskCards, updateTaskCard } from '../../../Helpers/Data/cardsData';
import { getHouseholdMembersWithUserInfo } from '../../../Helpers/Data/householdMembersData';

export default function AssignUserForm({
  cardId,
  cardName,
  cardImage,
  cardDefinition,
  conception,
  planning,
  execution,
  msoc,
  dailyGrind,
  needTypeId,
  categoryTypeId,
  assignedUserId,
  setHouseholdTaskCards
}) {
  const { householdId } = useParams();
  const [members, setMembers] = useState([]);
  console.warn(members);
  const [singleTaskCardToEdit, setSingleTaskCardToEdit] = useState({
    categoryTypeId,
    needTypeId,
    dailyGrind,
    msoc,
    execution,
    planning,
    conception,
    cardDefinition,
    cardImage,
    cardName,
    householdId,
    cardId,
    assignedUserId,
  });

  useEffect(() => {
    getHouseholdMembersWithUserInfo(householdId).then((response) => setMembers(response));
  }, []);

  const handleInputChange = (e) => {
    setSingleTaskCardToEdit((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTaskCard(singleTaskCardToEdit.cardId, singleTaskCardToEdit).then(() => getHouseholdTaskCards(householdId).then((response) => setHouseholdTaskCards(response)));
  };

  return (
    <Form
      id='CardForm'
      autoComplete='off'
      onSubmit={handleSubmit}
      className='CardForm'
    >
      <FormTitle className='formTitle'>Assign User</FormTitle>
      <Row>
      <Select
        className="item"
        type="select"
        name="assignedUserId"
        placeholder="User To Assign"
        id="exampleSelect"
        onChange={handleInputChange}
      >
        {members?.map((member) => (
          <Option
            key={member.userId}
            value={member.userId}
            selected={member.userId === singleTaskCardToEdit.assignedUserId}
          >
        {member.firstName} {member.lastName} {member.email}
          </Option>
        ))}
      </Select>
      </Row>
      <Button className='addCategory' type='submit'>
        Assign User
      </Button>
    </Form>
  );
}

AssignUserForm.propTypes = {
  cardId: PropTypes.string,
  householdId: PropTypes.string,
  cardName: PropTypes.string,
  cardImage: PropTypes.string,
  cardDefinition: PropTypes.string,
  conception: PropTypes.string,
  planning: PropTypes.string,
  execution: PropTypes.string,
  msoc: PropTypes.string,
  dailyGrind: PropTypes.bool,
  needTypeId: PropTypes.string,
  categoryTypeId: PropTypes.string,
  assignedUserId: PropTypes.string,
  setHouseholdTaskCards: PropTypes.func,
};
