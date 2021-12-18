import axios from 'axios';
import { MESIConfig } from '../apiKeys';

const dbUrl = MESIConfig.baseUrl;

const getUsers = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/users/`)
    .then((userList) => resolve(userList.data))
    .catch((err) => reject(err));
});

const getUser = (id) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/users/${id}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const addUser = (user) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/api/users`, user)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getUserByEmail = (email) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/users/email/${email}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export {
  getUsers,
  getUser,
  addUser,
  getUserByEmail
};
