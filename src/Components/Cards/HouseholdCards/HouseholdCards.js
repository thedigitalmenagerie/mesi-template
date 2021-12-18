/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import HouseholdForms from '../../Forms/HouseholdForms/HouseholdForm';
import {
  HouseholdCard,
  HouseholdCardImg,
  HouseholdCardHeader,
  HouseholdCardButtons,
  HouseholdCardDelete,
  HouseholdCardFooter,
  Button,
  Modal,
} from './HouseholdCardElements';

export const HouseholdCards = ({
  user,
  setHouseholds,
  id,
  householdName,
  hasPets,
  hasKids,
  hasRomance,
  stepId,
  steps,
  users,
}) => {
  console.warn(user);

  const history = useHistory();

  const handleClick = (type) => {
    switch (type) {
      case 'view':
        history.push(`/households/${id}`);
        break;
      default:
        console.warn('Nothing selected');
    }
  };

  return (
    <HouseholdCard className='HouseholdCard' key={id} id='HouseholdCard'>
      <HouseholdCardHeader className='HouseholdCardHeader'>
          <HouseholdCardButtons className='HouseholdCardButtons'>
          </HouseholdCardButtons>
      </HouseholdCardHeader>
      <Button className="HouseholdCardButton">
        <HouseholdCardImg className='HouseholdCardImg' onClick={() => handleClick('view')} />
      </Button>
      <HouseholdCardFooter className='HouseholdCardFooter'>
        {householdName} {hasPets} {hasKids} {hasRomance} {stepId} {steps.name}
      </HouseholdCardFooter>
        <Modal
          className='Modal'
        >
          <Button className='modalClose'>
            <HouseholdCardDelete/>
          </Button>
          <HouseholdForms
            id={id}
            user={user}
            householdName={householdName}
            hasPets={hasPets}
            hasKids={hasKids}
            hasRomance={hasRomance}
            stepId={stepId}
            setHouseholds={setHouseholds}
            steps={steps}
            users={users}
          />
        </Modal>
    </HouseholdCard>
  );
};

HouseholdCards.propTypes = {
  user: PropTypes.any,
  id: PropTypes.string.isRequired,
  householdName: PropTypes.string.isRequired,
  hasPets: PropTypes.bool,
  hasKids: PropTypes.bool,
  hasRomance: PropTypes.bool,
  stepId: PropTypes.string,
  setHouseholds: PropTypes.func,
  steps: PropTypes.any,
  users: PropTypes.any,
};

export default HouseholdCards;
