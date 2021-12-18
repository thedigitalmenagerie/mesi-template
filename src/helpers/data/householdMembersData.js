/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { MESIConfig } from '../apiKeys';

const dbUrl = MESIConfig.baseUrl;

const getHouseholdWithDetails = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/dash/byUser/${userId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const addHouseholdMember = (householdMember) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/api/householdMembers`, householdMember)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export {
  getHouseholdWithDetails,
  addHouseholdMember,
};
