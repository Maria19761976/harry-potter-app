import CharacterCard from '../CharacterCard/CharacterCard';
import './CharacterList.css';

const CharacterList = ({ characters, loading, error }) => {
  if (loading) {
    return (
      <div className="character-list__loading">
        <span className="character-list__spinner">⚡</span>
        Loading characters...
      </div>
    );
  }

  if (error) {
    return <div className="character-list__error">{error}</div>;
  }

  if (!characters.length) {
    return <div className="character-list__empty">No characters found.</div>;
  }

  return (
    <div>
      <p className="character-list__count">{characters.length} characters found</p>
      <div className="character-list__grid">
        {characters.map((character) => (
          <CharacterCard key={character.id || character.name} character={character} />
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
