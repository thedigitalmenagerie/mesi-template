/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
/* eslint-disable prefer-destructuring */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  CommunityAgreementContainer,
  CommunityAgreementWrapper,
  MainTitle,
  Title,
  Subtitle,
  CommunityAgreementTitle,
  Button,
  Row,
  RowImage,
  SubRow,
} from './HowToElements';
import NavBar from '../../Components/NavBar/NavBar';
import daily from '../../Assets/dailygrindBlack.png';
import pets from '../../Assets/petsBlack.png';
import romance from '../../Assets/heartBlack.png';
import value from '../../Assets/value.png';
import children from '../../Assets/feetBlack.png';
import home from '../../Assets/homeBlack.png';
import magic from '../../Assets/magicBlack.png';
import none from '../../Assets/nonnegotiabeBlack.png';
import out from '../../Assets/outBlack1.png';
import caregiving from '../../Assets/caregivingBlack.png';
import wild from '../../Assets/wildBlack.png';

export const HowTo = ({ user }) => {
  const [showBack, setShowBack] = useState(false);
  const handleClick = () => {
    if (showBack === false) {
      setShowBack(true);
    } else if (showBack === true) {
      setShowBack(false);
    }
  };
  return (
    <CommunityAgreementContainer
      className='CommunityAgreementContainer'
      id='CommunityAgreementContainer'
    >
      <NavBar user={user} />
      { showBack === false
        ? <CommunityAgreementWrapper
        className='CommunityAgreementWrapper'
        id='CommunityAgreements'
      >
        <CommunityAgreementTitle className='CommunityAgreementTitle'>
            <MainTitle className='MainTitle'>GAME PLAY</MainTitle>
          <Title className='Title'>DEFINE</Title>
          <Subtitle className='subTitle'>
            Define your shared space, add members, and specify whether your shared space has a combination of romance, pets, children, or none of the above.
          </Subtitle>
          <Title className='Title'>PHASE ONE</Title>
          <Subtitle className='subTitle'>
            Agree to the Community Agreement and view the automatically generated task cards and start the conversation. You can edit these cards to better reflect your unique shared space and add anything you feel isn&apos;t covered.
          </Subtitle>
          <Title className='Title'>PHASE TWO</Title>
          <Subtitle className='subTitle'>
            Make a value declaration on each card.
          </Subtitle>
          <Title className='Title'>PHASE THREE</Title>
          <Subtitle className='subTitle'>
            View what your shared space and everyone within it values. Take a New Vow before dealing the deck and assigning tasks to members of your shared space.
          </Subtitle>
          <Title className='Title'>PHASE FOUR</Title>
          <Subtitle className='subTitle'>
            Deal the deck.
          </Subtitle>
          <Title className='Title'>PHASE FIVE</Title>
          <Subtitle className='subTitle'>
            Do your assigned tasks and plan a time to check-in and redeal the deck.
          </Subtitle>
          <Title className='Title'>PHASE SIX</Title>
          <Subtitle className='subTitle'>
            Redeal the deck and return to PHASE FOUR. Repeat as often as the members of your shared space deem necessary.
          </Subtitle>
          <Title><Button onClick={handleClick}>FAQ</Button></Title>
        </CommunityAgreementTitle>
      </CommunityAgreementWrapper>
        : <CommunityAgreementWrapper
        className='CommunityAgreementWrapper'
        id='CommunityAgreements'
      >
        <CommunityAgreementTitle className='CommunityAgreementTitle'>
          <MainTitle className='MainTitle'>FAQ</MainTitle>
          <Title className='Title'>WHY?</Title>
          <Subtitle className='subTitle'>
            A task manager for households based on the Fair Play system , aiming to more equitably distribute mental-load, emotional labor, second-shift, and invisible work amongst members of a household, with or without kids or pets and within or outside of romantic relationships.
          </Subtitle>
          <Title className='Title'>SPACE TYPES</Title>
          <Subtitle className='subTitle'>
            <Row>
              Romance
              <RowImage src={romance}/>
            </Row>
            <Row>
              Pets
              <RowImage src={pets}/>
            </Row>
            <Row>
              Children
              <RowImage src={children}/>
            </Row>
            <Row>
              None
              <RowImage src={none}/>
            </Row>
          </Subtitle>
          <Title className='Title'>CATEGORY TYPES</Title>
          <Subtitle className='subTitle'>
            <Row>
              <RowImage src={home}/>
              <SubRow>These are tasks performed around the house.</SubRow>
            </Row>
            <Row>
              <RowImage src={caregiving}/>
              <SubRow>These are tasks that involve caring for other members of your shared space.</SubRow>
            </Row>
            <Row>
              <RowImage src={wild}/>
              <SubRow>These are the tasks needed when life happens</SubRow>
            </Row>
            <Row>
              <RowImage src={out}/>
              <SubRow>These are the tasks done outside your shared space that help it run smoothly</SubRow>
            </Row>
            <Row>
              <RowImage src={magic}/>
              <SubRow>These are the little things that matter most.</SubRow>
            </Row>
          </Subtitle>
          <Title className='Title'>NON-NEGOTIABLE/ DAILY GRIND <RowImage src={daily}/></Title>
          <Subtitle className='subTitle'>
          <Row>
            On any given day there are 30 of these time-sucking jobs that must be done regularly, repetitively, and many at a very specific time.
          </Row>
          </Subtitle>
          <Title className='Title'>VALUE DECLARATIONS <RowImage src={value}/></Title>
          <Subtitle className='subTitle'>
          <Row>
            Do you value this card and feel it is an essential task to the maintenance of your shared space and the relationships within it?
            Is it a task that crowds the day to day and is uneccessary for the well-being of your shared space and everyone within it?
            </Row>
          </Subtitle>
          <Title className='Title'>CPE</Title>
          <Subtitle className='subTitle'>
            <Row>
              Conception
              <SubRow>What is this need?</SubRow>
            </Row>
            <Row>
              Planning
              <SubRow>How will you plan for this need to be met?</SubRow>
            </Row>
            <Row>
              Execution
              <SubRow> How wil this need be met?</SubRow>
            </Row>
            <Row>
              MSOC - Minimum Standard of Care
              <SubRow>What are the minimum requirements for this need to be met?</SubRow>
            </Row>
          </Subtitle>
          <Title> <Button onClick={handleClick}>GAME PLAY</Button></Title>
        </CommunityAgreementTitle>
      </CommunityAgreementWrapper>
      }
    </CommunityAgreementContainer>
  );
};

HowTo.propTypes = {
  user: PropTypes.any,
};

export default HowTo;
