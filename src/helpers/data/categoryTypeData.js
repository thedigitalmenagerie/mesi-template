/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { MESIConfig } from '../apiKeys';

const dbUrl = MESIConfig.baseUrl;

const getCategoryTypes = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/categoryTypes`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export {
  getCategoryTypes,
};
