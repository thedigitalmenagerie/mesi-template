/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { MESIConfig } from '../apiKeys';

const dbUrl = MESIConfig.baseUrl;

const getSteps = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/steps`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export {
  getSteps,
};
