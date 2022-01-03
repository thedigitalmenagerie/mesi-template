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

const getHouseholdMembers = (householdId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/householdMembers/byHousehold/${householdId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getHouseholdMembersWithUserInfo = (householdId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/householdMembers/byHouseholdWithUserInfo/${householdId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getSingleHouseholdMember = (householdId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/householdMembers/byHousehold/${householdId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const updateHouseholdMember = (id, memberObj) => new Promise((resolve, reject) => {
  axios.put(`${dbUrl}/api/householdMembers/${id}`, memberObj)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export {
  getHouseholdWithDetails,
  addHouseholdMember,
  getHouseholdMembers,
  getSingleHouseholdMember,
  updateHouseholdMember,
  getHouseholdMembersWithUserInfo
};
