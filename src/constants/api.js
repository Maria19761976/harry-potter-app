export const BASE_URL = 'https://hp-api.onrender.com/api';

export const ENDPOINTS = {
  allCharacters: `${BASE_URL}/characters`,
  students: `${BASE_URL}/characters/students`,
  staff: `${BASE_URL}/characters/staff`,
  byHouse: (house) => `${BASE_URL}/characters/house/${house}`,
};

export const HOUSES = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'];
