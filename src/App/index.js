/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../Helpers/Routes';
import { getUserByEmail, getUsers } from '../Helpers/Data/userData';
import { getSteps } from '../Helpers/Data/stepsData';
import { getHouseholdWithDetails } from '../Helpers/Data/householdMembersData';

export default function App() {
  const [user, setUser] = useState({});
  const [steps, setSteps] = useState([]);
  const [users, setUsers] = useState([]);
  const [households, setHouseholds] = useState([]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userObj) => {
      if (userObj) {
        userObj.getIdToken().then((token) => sessionStorage.setItem('token', token));
        getUserByEmail(userObj.email).then((responseObj) => {
          if (responseObj !== '') {
            setUser(responseObj);
          } else {
            setUser(false);
          }
        });
        getSteps().then((response) => setSteps(response));
        getUsers().then((response) => setUsers(response));
      } else {
        setUser(false);
      }
    });
  }, []);

  useEffect(() => {
    if (user.id) {
      getHouseholdWithDetails(user.id).then((response) => setHouseholds(response));
    } else {
      console.warn('No user households');
    }
  }, [user]);

  return (
    <div className='App'>
      <Router>
        <Routes
          user={user}
          setUser={setUser}
          steps={steps}
          setSteps={setSteps}
          users={users}
          setUsers={setUsers}
          households={households}
          setHouseholds={setHouseholds}
        />
      </Router>
    </div>
  );
}
