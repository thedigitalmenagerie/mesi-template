/* eslint-disable no-nested-ternary */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { FormGroup } from 'reactstrap';
import {
  Button,
  Form,
  Input,
  Label,
  //   ButtonImg,
  FormTitle,
  Row,
  Row2,
  Option,
  Select
} from './HouseholdTaskFormElements';
import { getNeedTypes } from '../../../Helpers/Data/needTypeData';
import { getCategoryTypes } from '../../../Helpers/Data/categoryTypeData';
import { getHouseholdTaskCards, updateTaskCard, addTaskCard } from '../../../Helpers/Data/cardsData';

export default function HouseholdTaskForms({
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
  console.warn(householdId);
  const [singleTaskCardToEdit, setSingleTaskCardToEdit] = useState({
    categoryTypeId: categoryTypeId || null,
    needTypeId: needTypeId || null,
    dailyGrind: dailyGrind || false,
    msoc: msoc || '',
    execution: execution || '',
    planning: planning || '',
    conception: conception || '',
    cardDefinition: cardDefinition || '',
    cardImage: cardImage || '',
    cardName: cardName || '',
    householdId,
    cardId: cardId || null,
    assignedUserId: assignedUserId || null,
  });

  const [needTypes, setNeedTypes] = useState([]);
  const [categoryTypes, setCategoryTypes] = useState([]);

  useEffect(() => {
    getNeedTypes().then(setNeedTypes);
    getCategoryTypes().then(setCategoryTypes);
  }, []);

  const handleInputChange = (e) => {
    setSingleTaskCardToEdit((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
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
    if (singleTaskCardToEdit.cardId) {
      updateTaskCard(singleTaskCardToEdit.cardId, singleTaskCardToEdit).then(() => getHouseholdTaskCards().then((response) => setHouseholdTaskCards(response)));
    } else {
      const taskCardObj = {
        categoryTypeId: singleTaskCardToEdit.categoryTypeId,
        needTypeId: singleTaskCardToEdit.needTypeId,
        dailyGrind: singleTaskCardToEdit.dailyGrind,
        msoc: singleTaskCardToEdit.msoc,
        execution: singleTaskCardToEdit.execution,
        planning: singleTaskCardToEdit.planning,
        conception: singleTaskCardToEdit.conception,
        cardDefinition: singleTaskCardToEdit.cardDefinition,
        cardImage: singleTaskCardToEdit.cardImage,
        cardName: singleTaskCardToEdit.cardName,
        householdId,
        assignedUserId: null,
      };
      console.warn(taskCardObj);
      addTaskCard(taskCardObj).then(() => getHouseholdTaskCards().then((response) => setHouseholdTaskCards(response)));
      setSingleTaskCardToEdit({
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
        assignedUserId: null,
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
          name='cardImage'
          type='text'
          placeholder='Card Image'
          value={singleTaskCardToEdit.cardImage}
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
            value={singleTaskCardToEdit.daily}
          />
        </FormGroup>
        <Label check>Daily Grind</Label>
      </Row2>
      <Button className='addCategory' type='submit'>
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
};
