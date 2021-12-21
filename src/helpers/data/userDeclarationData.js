/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { MESIConfig } from '../apiKeys';

const dbUrl = MESIConfig.baseUrl;

const getUserDeclarations = (cardId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/categoryTypes/${cardId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export {
  getUserDeclarations,
};
