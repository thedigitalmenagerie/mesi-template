import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  SingleTaskCardOuter,
  SideTaskCard,
  SideTaskCardTop,
  SideTaskCardBottom,
  SideTaskCardMiddle,
  SideTaskCardBottomLeft,
  SideTaskCardBottomRight,
  SideTaskCardBottomLeftInner,
  SideTaskCardImg,
  SideTaskCardTopRight,
  SideTaskCardTopLeft,
  ValueButtonImg2,
  ValueButton,
  ValueButtonImg,
  Button,
  Modal,
  MainTaskCard,
  MainTaskCardLeft,
  MainTaskCardRight,
  MainTaskCardRightTop,
  MainTaskCardRightMiddle,
  MainTaskCardRightBottom,
  Title,
  MainTaskCardRightMiddleBottomRight,
  MainTaskCardRightMiddleBottomMiddle,
  MainTaskCardRightMiddleBottomLeft,
  DailyGrindDiv,
} from './IndividualTaskCardElements';
import { getSingleHouseholdTaskCard } from '../../../Helpers/Data/cardsData';
import daily from '../../../Assets/dailyGrindPink.png';
import value from '../../../Assets/value.png';
import HouseholdTaskForms from '../../Forms/CardForms/HouseholdTaskForms';

const IndividualTaskCard = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [singleTaskCard, setSingleTaskCard] = useState({});
  const { householdId, cardId } = useParams();
  const history = useHistory();

  const handleClick = (type) => {
    switch (type) {
      case 'view':
        history.push(`/dashboard/${householdId}`);
        break;
      case 'value':
        history.push(`/dashboard/${householdId}/cards/value/${cardId}`);
        break;
      default:
        console.warn('Nothing selected');
    }
  };

  useEffect(() => {
    getSingleHouseholdTaskCard(cardId).then(setSingleTaskCard);
  }, []);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <SingleTaskCardOuter key={cardId} id='SingleTaskCardOuter'>
      <SideTaskCard className='SideTaskCard' key={cardId} id='SideTaskCard'>
       <SideTaskCardTop className='SideTaskCardop'>
        <SideTaskCardTopLeft className='SideTaskCardTopLeft'>
            {singleTaskCard.categoryTypeName}
        </SideTaskCardTopLeft>
        <SideTaskCardTopRight className="SideTaskCardTopRight">
          {singleTaskCard.cardName}
        </SideTaskCardTopRight>
      </SideTaskCardTop>
      <SideTaskCardMiddle className="SideTaskCardMiddle">
          <Button className="SideTaskCardCardButton">
            <SideTaskCardImg className='SideTaskCardCardImg' src={singleTaskCard.cardImage} onClick={() => handleClick('view')}/>
          </Button>
        </SideTaskCardMiddle>
      <SideTaskCardBottom className="SideTaskCardBottom">
          <SideTaskCardBottomLeft className="SideTaskCardBottomLeft">
            <SideTaskCardBottomLeftInner className="SideTaskCardBottomLeftInner">
              { (singleTaskCard.dailyGrind === 'true')
                ? <div></div>
                : <ValueButtonImg2 src={daily}/>
              }
              {singleTaskCard.needTypeName}
            </SideTaskCardBottomLeftInner>
          </SideTaskCardBottomLeft>
          <SideTaskCardBottomRight className="SideTaskCardBottomRight">
            <ValueButton>
                <ValueButtonImg src={value} onClick={() => handleClick('value')}/>
            </ValueButton>
          </SideTaskCardBottomRight>
        </SideTaskCardBottom>
    </SideTaskCard>
    <MainTaskCard className="MainTaskCard">
      <MainTaskCardLeft className="MainTaskCardLeft">
        { (singleTaskCard.dailyGrind === 'true')
          ? <div></div>
          : <DailyGrindDiv>*You have selected a Daily Grind card! On any given day there are 30 of these time-sucking jobs that must be done regularly, repetitively, and many at a very specific time.</DailyGrindDiv>
        }
      </MainTaskCardLeft>
      <MainTaskCardRight className="MainTaskCardRight">
        <MainTaskCardRightTop className="MainTaskCardRightTop">
        <Title className="Title">DEFINITION</Title>
          {singleTaskCard.cardDefinition}
        </MainTaskCardRightTop>
        <MainTaskCardRightMiddle className="MainTaskCardRightMiddle">
          <MainTaskCardRightMiddleBottomLeft>
          <Title className="Title">CONCEPTION</Title>
          {singleTaskCard.conception}
          </MainTaskCardRightMiddleBottomLeft>
          <MainTaskCardRightMiddleBottomMiddle>
          <Title className="Title">PLANNING</Title>
          {singleTaskCard.planning}
          </MainTaskCardRightMiddleBottomMiddle>
          <MainTaskCardRightMiddleBottomRight>
         <Title className="Title">EXECUTION</Title>
          {singleTaskCard.execution}
          </MainTaskCardRightMiddleBottomRight>
        </MainTaskCardRightMiddle>
        <MainTaskCardRightBottom className="MaintaskCardRightBottom">
          <Title className="Title">MIMIMUM STANDARD OF CARE</Title>
          {singleTaskCard.msoc}
        </MainTaskCardRightBottom>
      </MainTaskCardRight>
    </MainTaskCard>
      <Button className='modalClose' onClick={openModal}></Button>
      <Modal isOpen={modalIsOpen} className='Modal'>
        <Button className='modalClose' onClick={closeModal}></Button>
        <HouseholdTaskForms
              cardId={cardId}
              householdId={householdId}
              cardName={singleTaskCard.cardName}
              cardImage={singleTaskCard.cardImage}
              cardDefinition={singleTaskCard.cardDefinition}
              conception={singleTaskCard.conception}
              planning={singleTaskCard.planning}
              execution={singleTaskCard.execution}
              msoc={singleTaskCard.msoc}
              dailyGrind={singleTaskCard.dailyGrind}
              needTypeName={singleTaskCard.needTypeName}
              categoryTypeName={singleTaskCard.categoryTypeName}
          />
      </Modal>
    </SingleTaskCardOuter>
  );
};

IndividualTaskCard.propTypes = {
  user: PropTypes.any,
  users: PropTypes.any,
  steps: PropTypes.any,
};

export default IndividualTaskCard;
