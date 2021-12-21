/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import HouseholdForms from '../../Forms/HouseholdForms/HouseholdForm';
import { getHouseholdMembers } from '../../../Helpers/Data/householdMembersData';
import {
  HouseholdCard,
  HouseholdTop,
  HouseholdTopLeft,
  HouseholdTopRight,
  HouseholdMiddle,
  HouseholdBottom,
  HouseholdBottomLeft,
  HouseholdBottomRight,
  HouseholdCardImg,
  HouseholdCardDelete,
  HouseholdTypeContainer,
  Button,
  Modal,
  Img
} from './HouseholdCardElements';
import home from '../../../Assets/homeLogo.png';
import pets from '../../../Assets/petsGreen.png';
import kids from '../../../Assets/kidsgreen.png';
import romance from '../../../Assets/romanceBlue.png';

export const HouseholdCards = ({
  user,
  setHouseholds,
  householdId,
  householdName,
  hasPets,
  hasKids,
  hasRomance,
  stepName,
  steps,
  users,
}) => {
  const history = useHistory();
  const [householdMembers, setHouseholdMembers] = useState([]);
  console.warn(householdMembers);

  const handleClick = (type) => {
    switch (type) {
      case 'view':
        if (stepName === 'One') {
          history.push(`/dashboard/communityagreement/${householdId}`);
        } else {
          history.push(`/dashboard/${householdId}`);
        }
        break;
      default:
        console.warn('Nothing selected');
    }
  };

  useEffect(() => {
    getHouseholdMembers(householdId).then((response) => setHouseholdMembers(response));
  }, []);

  return (
    <HouseholdCard className='HouseholdCard' key={householdId} id='HouseholdCard'>
      <HouseholdTop className='HouseholdTop'>
        <HouseholdTopLeft className='HouseholdTopLeft'>
          { hasPets === 'true'
            ? <div></div>
            : <HouseholdTypeContainer className="HouseholdTypeContainer"><Img src={pets}/></HouseholdTypeContainer>
          }
          { hasKids === 'true'
            ? <div></div>
            : <HouseholdTypeContainer><Img src={kids}/></HouseholdTypeContainer>
          }
          { hasRomance === 'true'
            ? <div></div>
            : <HouseholdTypeContainer><Img src={romance}/></HouseholdTypeContainer>
          }
        </HouseholdTopLeft>
        <HouseholdTopRight className="HouseholdTopRight">
          {householdName}
        </HouseholdTopRight>
      </HouseholdTop>
      <HouseholdMiddle className="HouseholdMiddle">
          <Button className="HouseholdCardButton">
            <HouseholdCardImg className='HouseholdCardImg' src={home} onClick={() => handleClick('view')} />
          </Button>
        </HouseholdMiddle>
      <HouseholdBottom className="HouseholdBottom">
          <HouseholdBottomLeft className="HouseholdBottomLeft">
           Phase {stepName}
          </HouseholdBottomLeft>
          <HouseholdBottomRight className="HouseholdBottomRight">
          </HouseholdBottomRight>
        </HouseholdBottom>
        <Modal
          className='Modal'
        >
          <Button className='modalClose'>
            <HouseholdCardDelete/>
          </Button>
          <HouseholdForms
            householdId={householdId}
            user={user}
            householdName={householdName}
            hasPets={hasPets}
            hasKids={hasKids}
            hasRomance={hasRomance}
            stepName={stepName}
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
  householdId: PropTypes.string.isRequired,
  householdName: PropTypes.string.isRequired,
  hasPets: PropTypes.bool,
  hasKids: PropTypes.bool,
  hasRomance: PropTypes.bool,
  stepId: PropTypes.string,
  stepName: PropTypes.string,
  setHouseholds: PropTypes.func,
  steps: PropTypes.any,
  users: PropTypes.any,
};

export default HouseholdCards;
