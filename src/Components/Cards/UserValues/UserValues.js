/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import {
  PictureContainer,
  UserContainer,
  UserPicture
} from './UserValuesElements';

const UserValues = ({
  id,
  profilePicture,
}) => {
  return (
    <UserContainer key={id}>
      <PictureContainer>
        <UserPicture src={profilePicture}/>
      </PictureContainer>
    </UserContainer>
  );
};

UserValues.propTypes = {
  id: PropTypes.string,
  profilePicture: PropTypes.string,
};

export default UserValues;
