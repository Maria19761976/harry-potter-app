import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import CharacterList from '../../components/CharacterList/CharacterList';
import SearchBar from '../../components/SearchBar/SearchBar';
import HouseFilter from '../../components/HouseFilter/HouseFilter';
import useCharacters from '../../hooks/useCharacters';
import './HomePage.css';

const PAGE_TITLES = {
  '/': 'All Characters',
  '/students': 'Hogwarts Students',
  '/staff': 'Hogwarts Staff',
  '/houses': 'Filter by House',
};

const FILTER_MAP = {
  '/': 'all',
  '/students': 'students',
  '/staff': 'staff',
  '/houses': 'house',
};

const HomePage = () => {
  const location = useLocation();
  const [search, setSearch] = useState('');
  const [selectedHouse, setSelectedHouse] = useState('');

  const filter = FILTER_MAP[location.pathname] || 'all';
  const isHousePage = location.pathname === '/houses';

  const { characters, loading, error } = useCharacters(
    isHousePage ? 'house' : filter,
    selectedHouse
  );

  const filteredCharacters = characters.filter((char) =>
    char.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="home-page">
      <section className="home-page__hero">
        <h1 className="home-page__title">⚡ {PAGE_TITLES[location.pathname] || 'Characters'}</h1>
        <p className="home-page__subtitle">Explore the wizarding world</p>
      </section>

      <div className="home-page__controls">
        {isHousePage && (
          <>
            <p className="home-page__controls-title">Filter by House</p>
            <HouseFilter selectedHouse={selectedHouse} onSelectHouse={setSelectedHouse} />
          </>
        )}
        <SearchBar value={search} onChange={setSearch} />
      </div>

      <CharacterList characters={filteredCharacters} loading={loading} error={error} />
    </main>
  );
};

export default HomePage;
