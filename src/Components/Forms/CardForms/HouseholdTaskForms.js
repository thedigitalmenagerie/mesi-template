/* eslint-disable no-nested-ternary */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-plusplus */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
} from './HouseholdTaskFormElements';

export default function HouseholdTaskForms({
  cardId,
  householdId,
  cardName,
  cardImage,
  cardDefinition,
  conception,
  planning,
  execution,
  msoc,
  dailyGrind,
  needTypeName,
  categoryTypeName,
}) {
  const [singleTaskCard, setSingleTaskCard] = useState({
    categoryTypeName: categoryTypeName || '',
    needTypeName: needTypeName || '',
    dailyGrind: dailyGrind || false,
    msoc: msoc || '',
    execution: execution || '',
    planning: planning || '',
    conception: conception || '',
    cardDefinition: cardDefinition || '',
    cardImage: cardImage || '',
    cardName: cardName || '',
    householdId: householdId || null,
    cardId: cardId || null,
  });

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
    // const taskCardObj = {
    //   categoryTypeName: categoryTypeName,
    //   needTypeName: needTypeName,
    //   dailyGrind: dailyGrind,
    //   msoc: msoc,
    //   execution: execution,
    //   planning: planning,
    //   conception: conception,
    //   cardDefinition: cardDefinition,
    //   cardImage: cardImage,
    //   cardName: cardName,
    //   householdId: householdId,
    //   cardId: cardId,
    // };
    // console.warn(taskCardObj);
    setSingleTaskCard({
      categoryTypeName: '',
      needTypeName: '',
      dailyGrind: false,
      msoc: '',
      execution: '',
      planning: '',
      conception: '',
      cardDefinition: '',
      cardImage: '',
      cardName: '',
      householdId: '',
      cardId: '',
    });
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
  needTypeName: PropTypes.string,
  categoryTypeName: PropTypes.string,
};
