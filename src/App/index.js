/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../Helpers/Routes';
import { getUserByEmail, getUsers } from '../Helpers/Data/userData';
import { getSteps } from '../Helpers/Data/stepsData';

export default function App() {
  const [user, setUser] = useState({});
  const [steps, setSteps] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        user.getIdToken().then((token) => sessionStorage.setItem('token', token));
        getUserByEmail(user.email).then((response) => setUser(response));
        getSteps().then((response) => setSteps(response));
        getUsers().then((response) => setUsers(response));
        setUser(user);
      } else {
        setUser(false);
      }
    });
  }, []);

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
        />
      </Router>
    </div>
  );
}
