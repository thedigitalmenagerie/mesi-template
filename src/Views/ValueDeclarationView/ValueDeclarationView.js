/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
/* eslint-disable prefer-destructuring */
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  ValueDeclarationContainer,
  ValueDeclarationWrapper,
  Title,
  Subtitle,
  ValueDeclarationRules,
  ValueDeclarationTitle,
  RuleText,
  RuleTitle,
  ValueDeclarationButton,
} from './ValueDeclarationViewElements';
import NavBar from '../../Components/NavBar/NavBar';
import { getUserDeclarations } from '../../Helpers/Data/userDeclarationData';

export const ValueDeclarationView = ({
  user,
}) => {
  const { householdId, cardId } = useParams();
  const history = useHistory();

  const redirect = () => {
    history.push(`/dashboard/${householdId}`);
  };

  const [userDeclaration, setUserDeclaration] = useState([]);
  console.warn(userDeclaration);

  useEffect(() => {
    getUserDeclarations(cardId).then((response) => setUserDeclaration(response));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <ValueDeclarationContainer className="ValueDeclarationContainer" id="ValueDeclarationContainer">
      <NavBar user={user}/>
      <ValueDeclarationWrapper className="ValueDeclarationWrapper" id="ValueDeclarations">
        <ValueDeclarationTitle className="ValueDeclarationTitle">
          <Title className="Title">USER DECLARATION</Title>
          <Subtitle className="subTitle">Do you value this card? </Subtitle>
        </ValueDeclarationTitle>
        <ValueDeclarationRules className="ValueDeclarationRules">
          <RuleTitle className="RuleTitle">NONNEGOTIABLE and DAILY GRIND</RuleTitle>
          <RuleText className="RuleText">All time is created equal. My time is valuable as your time. Fairness is playing with the Nonnegoatiable and Daily Grind task cards. </RuleText>
          <RuleTitle className="RuleTitle">CARDS BOTH PEOPLE VALUE</RuleTitle>
          <RuleText className="RuleText">We don&apos;t have to do it all. We zeroed in on the cards that are important to both of us and thre out the cards that don’t servce us. Now that we&apos;ve added these cards to our deck, let&apos;s work toward being more efficient and thoughtful about how we share in the workload.</RuleText>
          <RuleTitle className="RuleTitle">CARDS ONE PERSON VALUES</RuleTitle>
          <RuleText className="RuleText">The hours of my life are as valuable as yours and we both get to make choices how we use our time. I will still include you in the planning, but since I alonevalue it, I will hold the card. </RuleText>
        </ValueDeclarationRules>
        <ValueDeclarationButton className="ValueDeclarationButton" type="submit" onSubmit={handleSubmit} onClick={redirect}>AGREE</ValueDeclarationButton>
        </ValueDeclarationWrapper>
      </ValueDeclarationContainer>
  );
};

ValueDeclarationView.propTypes = {
  user: PropTypes.any,
  steps: PropTypes.any,
  users: PropTypes.any,
};

export default ValueDeclarationView;
