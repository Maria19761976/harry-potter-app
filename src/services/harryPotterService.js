import axios from 'axios';
import { ENDPOINTS } from '../constants/api';

const getAllCharacters = async () => {
  const response = await axios.get(ENDPOINTS.allCharacters);
  return response.data;
};

const getStudents = async () => {
  const response = await axios.get(ENDPOINTS.students);
  return response.data;
};

const getStaff = async () => {
  const response = await axios.get(ENDPOINTS.staff);
  return response.data;
};

const getCharactersByHouse = async (house) => {
  const response = await axios.get(ENDPOINTS.byHouse(house.toLowerCase()));
  return response.data;
};

const harryPotterService = {
  getAllCharacters,
  getStudents,
  getStaff,
  getCharactersByHouse,
};

export default harryPotterService;
