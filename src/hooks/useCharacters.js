import { useState, useEffect } from 'react';
import harryPotterService from '../services/harryPotterService';

const useCharacters = (filter = 'all', house = '') => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      setError(null);
      try {
        let data;
        if (filter === 'students') {
          data = await harryPotterService.getStudents();
        } else if (filter === 'staff') {
          data = await harryPotterService.getStaff();
        } else if (filter === 'house' && house) {
          data = await harryPotterService.getCharactersByHouse(house);
        } else {
          data = await harryPotterService.getAllCharacters();
        }
        setCharacters(data);
      } catch (err) {
        setError('Failed to fetch characters. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [filter, house]);

  return { characters, loading, error };
};

export default useCharacters;
