/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../Helpers/Routes';

export default function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        user.getIdToken().then((token) => sessionStorage.setItem('token', token));
        setUser(user);
      } else {
        setUser(false);
      }
    });
  }, []);

  return (
    <div className='App'>
      <Router>
        <Routes user={user} setUser={setUser}/>
      </Router>
    </div>
  );
}
