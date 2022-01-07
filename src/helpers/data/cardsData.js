/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { MESIConfig } from '../apiKeys';

const dbUrl = MESIConfig.baseUrl;

const getHouseholdTaskCards = (householdId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/dash/households/${householdId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getDGCardsByCTandHH = (householdId, categoryTypeId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/dash/dgCards/${householdId}/${categoryTypeId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getNonDGCardsByCTandHH = (householdId, categoryTypeId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/dash/nondgCards/${householdId}/${categoryTypeId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getTaskCards = (householdId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/dash/cardsByHH/${householdId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getHouseholdTaskCardsByAssignedUser = (householdId, assignedUserId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/dash/households/${householdId}/${assignedUserId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getSingleHouseholdTaskCard = (cardId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/dash/cardswithdetail/${cardId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getUndeclaredCards = (userId, houseHoldId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/dash/cards/declarations/${userId}/${houseHoldId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const addTaskCard = (card) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/api/dash/cards`, card)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const deleteTaskCard = (cardId) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/api/dash/cards/${cardId}`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const updateTaskCard = (id, card) => new Promise((resolve, reject) => {
  axios.put(`${dbUrl}/api/dash/cards/${id}`, card)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const updateCard = (id, card) => new Promise((resolve, reject) => {
  axios.put(`${dbUrl}/api/dash/cards/${id}`, card)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

export {
  getHouseholdTaskCards,
  getSingleHouseholdTaskCard,
  addTaskCard,
  updateTaskCard,
  deleteTaskCard,
  getUndeclaredCards,
  getHouseholdTaskCardsByAssignedUser,
  getTaskCards,
  updateCard,
  getNonDGCardsByCTandHH,
  getDGCardsByCTandHH
};
