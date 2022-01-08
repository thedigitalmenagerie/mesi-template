/* eslint-disable no-nested-ternary */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable prefer-rest-params */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { FormGroup } from 'reactstrap';
import {
  Button,
  Form,
  Input,
  Label,
  FormTitle,
  Row,
  Row2,
  Option,
  Select
} from './HouseholdTaskFormElements';
import { getNeedTypes } from '../../../Helpers/Data/needTypeData';
import { getCategoryTypes } from '../../../Helpers/Data/categoryTypeData';
import {
  updateTaskCard,
  addTaskCard,
  getSingleHouseholdTaskCard,
  getHouseholdTaskCards
} from '../../../Helpers/Data/cardsData';

export default function HouseholdTaskForms({
  cardId,
  cardName,
  cardDefinition,
  cardImage,
  conception,
  planning,
  execution,
  msoc,
  dailyGrind,
  needTypeId,
  categoryTypeId,
  setHouseholdTaskCards,
  closeModal,
  setSingleTaskCard,
}) {
  const { householdId } = useParams();

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
  });
  const [singleTaskCardToAdd, setSingleTaskCardToAdd] = useState({
    categoryTypeId: null,
    needTypeId: null,
    dailyGrind: false,
    msoc: '',
    execution: '',
    planning: '',
    conception: '',
    cardDefinition: '',
    cardImage: 'https://lh3.googleusercontent.com/pw/AM-JKLV7jJoHZYwQXExNDd_u7KbMoMPWLUqAOtnzxyDRTubbjqBTCRnYES0JP_PstoALCFxbDKiG8xU8rCVAZzBIHFs47AhdIfHULDehW45rduLUtnbot02mTHolOF6xXWx58vSXzW2ro8pEYaayvHUBKETo=s500-no?authuser=0',
    cardName: '',
    householdId,
  });

  const [needTypes, setNeedTypes] = useState([]);
  const [categoryTypes, setCategoryTypes] = useState([]);

  useEffect(() => {
    getNeedTypes().then(setNeedTypes);
    getCategoryTypes().then(setCategoryTypes);
  }, []);

  useEffect(() => {
    setSingleTaskCardToEdit({
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
    });
  }, [
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
    cardId
  ]);

  const handleInputChange = (e) => {
    if (cardId) {
      setSingleTaskCardToEdit((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    } else {
      setSingleTaskCardToAdd((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleCheckboxChange = (e) => {
    setSingleTaskCardToEdit((prevState) => ({
      ...prevState,
      [e.target.name]:
        e.target.name === 'dailyGrind' ? e.target.checked : e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cardId) {
      updateTaskCard(cardId, singleTaskCardToEdit).then(() => getSingleHouseholdTaskCard(cardId).then((response) => setSingleTaskCard(response)));
    } else {
      addTaskCard(singleTaskCardToAdd).then(() => getHouseholdTaskCards(householdId).then((response) => setHouseholdTaskCards(response)));
      setSingleTaskCardToAdd({
        categoryTypeId: '',
        needTypeId: '',
        dailyGrind: false,
        msoc: '',
        execution: '',
        planning: '',
        conception: '',
        cardDefinition: '',
        cardImage: '',
        cardName: '',
        householdId,
      });
    }
  };

  return (
    <Form
      id='CardForm'
      autoComplete='off'
      onSubmit={handleSubmit}
      className='CardForm'
    >
      <FormTitle className='formTitle'>Create Task Card</FormTitle>
      <Row>
        <Input
          className='taskCard'
          name='cardName'
          type='text'
          placeholder='Card Name'
          value={singleTaskCardToEdit.cardName}
          onChange={handleInputChange}
        ></Input>
      </Row>
      <Row>
        <Input
          className='taskCard'
          name='cardDefinition'
          type='text'
          placeholder='Card Definition'
          value={singleTaskCardToEdit.cardDefinition}
          onChange={handleInputChange}
        ></Input>
      </Row>
      <Row>
        <Input
          className='taskCard'
          name='conception'
          type='text'
          placeholder='Conception'
          value={singleTaskCardToEdit.conception}
          onChange={handleInputChange}
        ></Input>
      </Row>
      <Row>
        <Input
          className='taskCard'
          name='planning'
          type='text'
          placeholder='Planning'
          value={singleTaskCardToEdit.planning}
          onChange={handleInputChange}
        ></Input>
      </Row>
        <Row>
          <Input
            className='taskCard'
            name='execution'
            type='text'
            placeholder='Execution'
            value={singleTaskCardToEdit.execution}
            onChange={handleInputChange}
          ></Input>
        </Row>
        <Row>
        <Input
          className='taskCard'
          name='msoc'
          type='text'
          placeholder='msoc'
          value={singleTaskCardToEdit.msoc}
          onChange={handleInputChange}
        ></Input>
      </Row>
      <Label>Need Type:</Label>
      <Row>
      <Select
        className="item"
        type="select"
        name="needTypeId"
        placeholder="Need Type"
        id="exampleSelect"
        onChange={handleInputChange}
      >
        {needTypes?.map((needType) => (
          <Option
            key={needType.id}
            value={needType.id}
            selected={needType.id === singleTaskCardToEdit.needTypeId}
          >
            {needType.needTypeName}
          </Option>
        ))}
      </Select>
      </Row>
      <Label>Category Type:</Label>
      <Row>
      <Select
        className="item"
        type="select"
        name="categoryTypeId"
        placeholder="Category Type"
        id="exampleSelect"
        onChange={handleInputChange}
      >
        {categoryTypes?.map((categoryType) => (
          <Option
            key={categoryType.id}
            value={categoryType.id}
            selected={categoryType.id === singleTaskCardToEdit.categoryTypeId}
          >
            {categoryType.categoryTypeName}
          </Option>
        ))}
      </Select>
      </Row>
      <Row2>
        <FormGroup check id='form-check'>
          {/* <ButtonImg></ButtonImg> */}
          <Input
            type='checkbox'
            name='dailyGrind'
            onChange={handleCheckboxChange}
            checked={singleTaskCardToEdit.dailyGrind}
            value={singleTaskCardToEdit.dailyGrind}
          />
        </FormGroup>
        <Label check>Daily Grind</Label>
      </Row2>
      <Button className='addCategory' type='submit' onClick={closeModal}>
        Create Household
      </Button>
    </Form>
  );
}

HouseholdTaskForms.propTypes = {
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
  closeModal: PropTypes.func,
  user: PropTypes.any,
  setSingleTaskCard: PropTypes.func,
};
