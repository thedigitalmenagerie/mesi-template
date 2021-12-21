/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { MESIConfig } from '../apiKeys';

const dbUrl = MESIConfig.baseUrl;

const getNeedTypes = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/needTypes`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export {
  getNeedTypes,
};
