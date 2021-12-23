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
  ButtonImg,
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
  //   householdId,
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
  assignedUserId
}) {
  const { householdId } = useParams();
  const [singleTaskCard, setSingleTaskCard] = useState({
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
    setSingleTaskCard((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setSingleTaskCard((prevState) => ({
      ...prevState,
      [e.target.name]:
        e.target.name === 'dailyGrind' ? e.target.checked : e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (singleTaskCard.cardId) {
      updateTaskCard(singleTaskCard.cardId, singleTaskCard).then(() => getHouseholdTaskCards().then((response) => setSingleTaskCard(response)));
    } else {
      const taskCardObj = {
        categoryTypeId: singleTaskCard.categoryTypeId,
        needTypeId: singleTaskCard.needTypeId,
        dailyGrind: singleTaskCard.dailyGrind,
        msoc: singleTaskCard.msoc,
        execution: singleTaskCard.execution,
        planning: singleTaskCard.planning,
        conception: singleTaskCard.conception,
        cardDefinition: singleTaskCard.cardDefinition,
        cardImage: singleTaskCard.cardImage,
        cardName: singleTaskCard.cardName,
        householdId,
        assignedUserId: null,
      };
      console.warn(taskCardObj);
      addTaskCard(taskCardObj).then(() => getHouseholdTaskCards().then((response) => setSingleTaskCard(response)));
      setSingleTaskCard({
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
        cardId: null,
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
          value={singleTaskCard.cardName}
          onChange={handleInputChange}
        ></Input>
      </Row>
      <Row>
        <Input
          className='taskCard'
          name='cardDefinition'
          type='text'
          placeholder='Card Definition'
          value={singleTaskCard.cardDefinition}
          onChange={handleInputChange}
        ></Input>
      </Row>
      <Row>
        <Input
          className='taskCard'
          name='cardImage'
          type='text'
          placeholder='Card Image'
          value={singleTaskCard.cardImage}
          onChange={handleInputChange}
        ></Input>
      </Row>
      <Row>
        <Input
          className='taskCard'
          name='conception'
          type='text'
          placeholder='Conception'
          value={singleTaskCard.conception}
          onChange={handleInputChange}
        ></Input>
      </Row>
      <Row>
        <Input
          className='taskCard'
          name='planning'
          type='text'
          placeholder='Planning'
          value={singleTaskCard.planning}
          onChange={handleInputChange}
        ></Input>
      </Row>
      <Row>
        <Row>
          <Input
            className='taskCard'
            name='execution'
            type='text'
            placeholder='Execution'
            value={singleTaskCard.execution}
            onChange={handleInputChange}
          ></Input>
        </Row>
        <Input
          className='taskCard'
          name='msoc'
          type='text'
          placeholder='msoc'
          value={singleTaskCard.msoc}
          onChange={handleInputChange}
        ></Input>
      </Row>
      <Row>
      <Label>Need Type:</Label>
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
            selected={needType.id === singleTaskCard.needTypeId}
          >
            {needType.needTypeName}
          </Option>
        ))}
      </Select>
      </Row>
      <Row>
      <Label>Category Type:</Label>
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
            selected={categoryType.id === singleTaskCard.categoryTypeId}
          >
            {categoryType.categoryTypeName}
          </Option>
        ))}
      </Select>
      </Row>
      <Row2>
        <FormGroup check id='form-check'>
          <ButtonImg></ButtonImg>
          <Input
            type='checkbox'
            name='dailyGrind'
            onChange={handleCheckboxChange}
            checked={singleTaskCard.dailyGrind}
            value={singleTaskCard.daily}
          />
          <Label check> This is a daily Grind Card.</Label>
        </FormGroup>
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
};
