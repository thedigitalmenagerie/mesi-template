/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { MESIConfig } from '../apiKeys';

const dbUrl = MESIConfig.baseUrl;

const getHouseholdTaskCards = (householdId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/dash/households/${householdId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getSingleHouseholdTaskCard = (cardId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/dash/cardswithdetail/${cardId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export {
  getHouseholdTaskCards,
  getSingleHouseholdTaskCard
};
