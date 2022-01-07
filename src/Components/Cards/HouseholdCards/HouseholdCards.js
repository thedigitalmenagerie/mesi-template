/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import HouseholdForms from '../../Forms/HouseholdForms/HouseholdForm';
import {
  getHouseholdMembers,
  getHouseholdWithDetails,
} from '../../../Helpers/Data/householdMembersData';
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
  HouseholdTypeContainer,
  Button,
  Modal,
  Img,
  DeleteImg,
} from './HouseholdCardElements';
import home from '../../../Assets/homeLogo.png';
import pets from '../../../Assets/petsGreen.png';
import kids from '../../../Assets/kidsgreen.png';
import romance from '../../../Assets/romanceBlue.png';
import deleted from '../../../Assets/delete.png';
import edit from '../../../Assets/editblue.png';
import exitModal from '../../../Assets/exitModal.png';
import { deleteHousehold, updateHousehold } from '../../../Helpers/Data/householdData';
import { getUndeclaredCards } from '../../../Helpers/Data/cardsData';

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
  const [undeclaredtaskCards, setUndeclaredTaskCards] = useState([]);
  const agreeingMembers = [];
  const membersUndeclared = [];
  let currentMemberAgrees = false;

  householdMembers.forEach((member) => getUndeclaredCards(member.userId, householdId).then((response) => {
    if (response.length !== 0) {
      membersUndeclared.push(member.userId);
    }
  }));

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const refreshPage = () => {
    window.location.reload();
  };

  const handleClick = (type) => {
    switch (type) {
      case 'view':
        // if step name equals one
        if (stepName === 'One') {
          // for each householdMember
          householdMembers.forEach((member) => {
            // that has agreed, push to agreeingmembers array
            if (member.communityAgreement === true) {
              agreeingMembers.push(member);
              // if there is a member that matches current member update currentMemberAgrees to true
              if (user.id === member.userId) {
                currentMemberAgrees = true;
                // else if there is not a member that matches current member, update currentMemberAgrees to false
              } else if (user.id !== member.userId) {
                currentMemberAgrees = false;
              }
            }
            // if householdMemberArray equals agreeingMembers array
            if (householdMembers.length === agreeingMembers.length) {
              // create household object, update household, and push to the household dash
              const house = {
                householdId,
                householdName,
                hasPets,
                hasKids,
                hasRomance,
                stepId: '3C22C28B-1074-4BED-B3E5-D763BB3A6BC4',
              };
              updateHousehold(householdId, house);
              history.push(`/dashboard/${householdId}`);
              // if householdMemberArray does not equal agreeing members array
            } else if (householdMembers.length !== agreeingMembers.length && currentMemberAgrees === true) {
              history.push(`/dashboard/${householdId}/awaitingOtherUsers`);
            } else if (householdMembers.length !== agreeingMembers.length && currentMemberAgrees === false) {
              history.push(`/dashboard/communityAgreement/${householdId}`);
            }
          });
        } else if (stepName === 'Two') {
          console.warn(stepName);
          console.warn(membersUndeclared);
          if (membersUndeclared.length === 0 && undeclaredtaskCards.length === 0) {
            console.warn('All users have complete declarations');
            const house = {
              householdId,
              householdName,
              hasPets,
              hasKids,
              hasRomance,
              stepId: 'BCBD1E56-4601-4A17-8A1C-F23E6975FF5F',
            };
            updateHousehold(householdId, house);
            refreshPage();
          } else if (membersUndeclared.length !== 0 && undeclaredtaskCards.length === 0) {
            console.warn('This user has made all declarations and is awaiting other users');
            history.push(`/dashboard/${householdId}/awaitingOtherUsers`);
          } else if (membersUndeclared.length !== 0 && undeclaredtaskCards.length !== 0) {
            console.warn('This user has not made all declarations');
            history.push(`/dashboard/${householdId}`);
          }
        } else if (stepName === 'Three') {
          history.push(`/dashboard/${householdId}/${stepName}/valuechartview`);
        } else if (stepName === 'Four') {
          history.push(`/dashboard/${householdId}/assignView`);
        } else if (stepName === 'Five') {
          history.push(`/dashboard/${householdId}/assignedChartView`);
        } else if (stepName === 'Six') {
          history.push(`/dashboard/finalDash/${householdId}/redealView`);
        } else {
          history.push('/dashboard');
        }
        break;
      case 'delete':
        deleteHousehold(householdId).then(() => getHouseholdWithDetails(user.id).then((response) => setHouseholds(response)));
        break;
      default:
        console.warn('Nothing selected');
    }
  };

  useEffect(() => {
    getHouseholdMembers(householdId).then((response) => setHouseholdMembers(response));
    getUndeclaredCards(user.id, householdId).then((response) => setUndeclaredTaskCards(response));
  }, []);

  return (
    <HouseholdCard
      className='HouseholdCard'
      key={householdId}
      id='HouseholdCard'
    >
      <HouseholdTop className='HouseholdTop'>
        <HouseholdTopLeft className='HouseholdTopLeft'>
          {hasPets !== true ? (
            <div></div>
          ) : (
            <HouseholdTypeContainer className='HouseholdTypeContainer'>
              <Img className='Img' src={pets} />
            </HouseholdTypeContainer>
          )}
          {hasKids !== true ? (
            <div></div>
          ) : (
            <HouseholdTypeContainer className='HouseholdTypeContainer'>
              <Img className='Img' src={kids} />
            </HouseholdTypeContainer>
          )}
          {hasRomance !== true ? (
            <div></div>
          ) : (
            <HouseholdTypeContainer className='HouseholdTypeContainer'>
              <Img className='Img' src={romance} />
            </HouseholdTypeContainer>
          )}
        </HouseholdTopLeft>
        <HouseholdTopRight className='HouseholdTopRight'>
          {householdName}
        </HouseholdTopRight>
      </HouseholdTop>
      <HouseholdMiddle className='HouseholdMiddle'>
        <Button className='HouseholdCardButton'>
          <HouseholdCardImg
            className='HouseholdCardImg'
            src={home}
            onClick={() => handleClick('view')}
          />
        </Button>
      </HouseholdMiddle>
      <HouseholdBottom className='HouseholdBottom'>
        <HouseholdBottomLeft className='HouseholdBottomLeft'>
          Phase {stepName}
        </HouseholdBottomLeft>
        <HouseholdBottomRight className='HouseholdBottomRight'>
          <Button className='HouseholdCardButton'>
            <DeleteImg
              className='HouseholdCardImg'
              src={edit}
              onClick={openModal}
            />
          </Button>
          <Button className='HouseholdCardButton'>
            <DeleteImg
              className='HouseholdCardImg'
              src={deleted}
              onClick={() => handleClick('delete')}
            />
          </Button>
        </HouseholdBottomRight>
      </HouseholdBottom>
      <Modal className='Modal' isOpen={modalIsOpen}>
        <Button className='modalClose' onClick={closeModal}>
          <DeleteImg src={exitModal} />
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
          householdMembers={householdMembers}
          setHouseholdMembers={setHouseholdMembers}
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
  householdMembers: PropTypes.any,
  setHouseholdMembers: PropTypes.func,
  steps: PropTypes.any,
  users: PropTypes.any,
};

export default HouseholdCards;
