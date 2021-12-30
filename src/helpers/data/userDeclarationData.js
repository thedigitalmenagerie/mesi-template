/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { MESIConfig } from '../apiKeys';

const dbUrl = MESIConfig.baseUrl;

const getUserDeclarations = (userId, cardId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/userDeclaration/${userId}/${cardId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const addUserDeclaration = (declaration) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/api/userDeclaration`, declaration)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export {
  getUserDeclarations,
  addUserDeclaration
};
