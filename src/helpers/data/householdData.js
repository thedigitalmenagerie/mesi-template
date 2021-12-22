/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { MESIConfig } from '../apiKeys';

const dbUrl = MESIConfig.baseUrl;

const addHousehold = (household) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/api/dash`, household)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const deleteHousehold = (householdId) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/api/dash/${householdId}`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const updateHousehold = (id, household) => new Promise((resolve, reject) => {
  axios.put(`${dbUrl}/api/dash/${id}`, household)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export {
  addHousehold,
  deleteHousehold,
  updateHousehold
};
