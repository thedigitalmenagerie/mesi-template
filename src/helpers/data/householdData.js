/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { MESIConfig } from '../apiKeys';

const dbUrl = MESIConfig.baseUrl;

const addHousehold = (household) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/api/dash`, household)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export {
  addHousehold,
};
