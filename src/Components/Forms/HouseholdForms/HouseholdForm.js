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
  Option,
  Select,
  FormTitle,
  Row,
  Row2,
  Row3,
  Row4,
  Label2,
  Input2,
} from './HouseholdFormElements';
import {
  addHouseholdMember,
} from '../../../Helpers/Data/householdMembersData';
import { addHousehold } from '../../../Helpers/Data/householdData';
import pets from '../../../Assets/petsGreen.png';
import kids from '../../../Assets/kidsTan.png';
import romance from '../../../Assets/romanceBlue.png';

export default function HouseholdForms({
  id,
  householdName,
  hasPets,
  hasKids,
  hasRomance,
  stepId,
  // setHouseholds,
  steps,
  users,
}) {
  const [showMembers, setShowMembers] = React.useState(false);

  const [selectedMembers, setSelectedMembers] = React.useState([]);

  const [household, setHousehold] = useState({
    householdName: householdName || '',
    hasPets: hasPets || false,
    hasKids: hasKids || false,
    hasRomance: hasRomance || false,
    stepId: stepId || null,
    id: id || null,
  });

  const handleInputChange = (e) => {
    setHousehold((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setHousehold((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.name === 'hasPets' || e.target.name === 'hasKids' || e.target.name === 'hasRomance' ? e.target.checked : e.target.value,
    }));
  };

  const selectMember = (e) => {
    if (e.target.checked) {
      setSelectedMembers((prev) => [...prev, e.target.value]);
    } else {
      setSelectedMembers((prev) => prev.filter((i) => i !== e.target.value));
    }
  };

  const handleClick = () => {
    selectedMembers?.map(console.warn(selectedMembers.value));
    const memberObj = {
      id: null,
      householdId: household.id,
      userId: users.id,
      communityAgreement: false,
      newVow: false,
      reDeal: false,
    };
    addHouseholdMember(memberObj).then((memberArray) => setSelectedMembers(memberArray));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const householdObj = {
      householdName: household.householdName,
      hasPets: household.hasPets,
      hasKids: household.hasKids,
      hasRomance: household.hasRomance,
      stepId: household.stepId,
    };
    addHousehold(householdObj).then((response) => setHousehold(response));
    setHousehold({
      householdName: '',
      hasPets: false,
      hasKids: false,
      hasRomance: false,
      stepId: null,
      id: null,
    });
    setShowMembers(true);
  };

  return (
    <>
      {showMembers ? (
        <>
          <Row>
            {users?.map((householdMember) => (
              <FormGroup key={householdMember.id}>
                <Input2
                  type='checkbox'
                  name={householdMember.id}
                  onChange={selectMember}
                  key={householdMember.id}
                  value={householdMember.id}
                  checked={selectedMembers.indexOf(householdMember.id) !== -1}
                />
                <Label2>{householdMember.email}</Label2>
              </FormGroup>
            ))}
          </Row>
          <Button className='addCategory' onClick={handleClick}>
            Add Household Members
          </Button>
        </>
      ) : (
        <Form
          id='HouseholdForm'
          autoComplete='off'
          onSubmit={handleSubmit}
          className='householdForm'
        >
          <FormTitle className='formTitle'>Create Household</FormTitle>
          <Row>
            <Input
              className='household'
              name='householdName'
              type='text'
              placeholder='Household Name'
              value={household.householdName}
              onChange={handleInputChange}
            ></Input>
          </Row>
          <Row2>
            <FormGroup check id='form-check'>
              <ButtonImg src={pets}></ButtonImg>
              <Input
                type='checkbox'
                name='hasPets'
                onChange={handleCheckboxChange}
                checked={household.hasPets}
                value={household.hasPets}
              />
              <Label check> This household contains pets.</Label>
            </FormGroup>
          </Row2>
          <Row3>
            <FormGroup check id='form-check'>
              <ButtonImg src={kids}></ButtonImg>
              <Input
                type='checkbox'
                name='hasKids'
                onChange={handleCheckboxChange}
                checked={household.hasKids}
                value={household.hasKids}
              />
              <Label check> This household contains children.</Label>
            </FormGroup>
          </Row3>
          <Row4>
            <FormGroup check id='form-check'>
              <ButtonImg src={romance}></ButtonImg>
              <Input
                type='checkbox'
                name='hasRomance'
                onChange={handleCheckboxChange}
                checked={household.hasRomance}
                value={household.hasRomance}
              />
              <Label check> This household contains romance.</Label>
            </FormGroup>
          </Row4>
          <Row>
            <Select
              className='item'
              type='select'
              name='stepId'
              placeholder='Step'
              id='exampleSelect'
              onChange={handleInputChange}
            >
              {steps?.map((step) => (
                <Option
                  key={step.id}
                  value={step.id}
                  selected={step.id === stepId}
                >
                  Step {step.stepName}
                </Option>
              ))}
            </Select>
          </Row>
          <Button className='addCategory' type='submit'>
            Create Household
          </Button>
        </Form>
      )}
    </>
  );
}

HouseholdForms.propTypes = {
  setHouseholds: PropTypes.func,
  id: PropTypes.string,
  householdName: PropTypes.string,
  hasPets: PropTypes.bool,
  hasKids: PropTypes.bool,
  hasRomance: PropTypes.bool,
  stepId: PropTypes.string,
  steps: PropTypes.any,
  setSteps: PropTypes.any,
  user: PropTypes.any,
  users: PropTypes.any,
  setUsers: PropTypes.any,
};
