/* eslint-disable arrow-body-style */
import axios from 'axios';
import firebase from 'firebase/app';
import { addUser } from './Data/userData';

axios.interceptors.request.use((request) => {
  const token = sessionStorage.getItem('token');

  if (token != null) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
}, (error) => {
  return Promise.reject(error);
});

const signInUser = (setUser) => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((user) => {
    const us = user.user;
    if (user.additionalUserInfo?.isNewUser) {
      const userInfo = {
        FirstName: us?.displayName.split(' ')[0],
        LastName: us?.displayName.split(' ')[1],
        ProfilePicture: us?.photoURL,
        Email: us?.email,
      };
      addUser(userInfo).then(setUser);
    }
  });
};

const signOutUser = () => new Promise((resolve, reject) => {
  firebase.auth().signOut().then(resolve).catch(reject);
});

export { signInUser, signOutUser };
