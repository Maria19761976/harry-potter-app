import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import harryPotterService from '../../services/harryPotterService';
import './CharacterDetailPage.css';

const CharacterDetailPage = () => {
  const { name } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const findCharacter = async () => {
      setLoading(true);
      try {
        const data = await harryPotterService.getAllCharacters();
        const found = data.find(
          (char) => char.name.toLowerCase() === decodeURIComponent(name).toLowerCase()
        );
        setCharacter(found || null);
      } catch {
        setCharacter(null);
      } finally {
        setLoading(false);
      }
    };

    findCharacter();
  }, [name]);

  if (loading) {
    return <div className="detail-page__loading">⚡ Loading character...</div>;
  }

  if (!character) {
    return (
      <div className="detail-page">
        <Link to="/" className="detail-page__back">← Back</Link>
        <div className="detail-page__not-found">Character not found.</div>
      </div>
    );
  }

  const {
    name: charName, house, image, actor, alive, species, gender,
    dateOfBirth, ancestry, eyeColour, hairColour, patronus,
    hogwartsStudent, hogwartsStaff, wand, alternate_names,
  } = character;

  const role = hogwartsStudent ? 'Student' : hogwartsStaff ? 'Staff' : 'Other';

  return (
    <div className="detail-page">
      <Link to="/" className="detail-page__back">← Back to characters</Link>
      <div className="detail-page__card">
        <div className="detail-page__image-wrapper">
          {image ? (
            <img src={image} alt={charName} className="detail-page__image" />
          ) : (
            <span className="detail-page__placeholder">🧙</span>
          )}
        </div>
        <div className="detail-page__info">
          <h1 className="detail-page__name">{charName}</h1>
          <hr className="detail-page__divider" />

          <div className="detail-page__field">
            <span className="detail-page__label">Status:</span>
            <span className={`detail-page__badge detail-page__badge--${alive ? 'alive' : 'deceased'}`}>
              {alive ? 'Alive' : 'Deceased'}
            </span>
          </div>
          {house && (
            <div className="detail-page__field">
              <span className="detail-page__label">House:</span>
              <span className="detail-page__value">{house}</span>
            </div>
          )}
          <div className="detail-page__field">
            <span className="detail-page__label">Role:</span>
            <span className="detail-page__value">{role}</span>
          </div>
          {species && (
            <div className="detail-page__field">
              <span className="detail-page__label">Species:</span>
              <span className="detail-page__value">{species}</span>
            </div>
          )}
          {gender && (
            <div className="detail-page__field">
              <span className="detail-page__label">Gender:</span>
              <span className="detail-page__value">{gender}</span>
            </div>
          )}
          {dateOfBirth && (
            <div className="detail-page__field">
              <span className="detail-page__label">Date of Birth:</span>
              <span className="detail-page__value">{dateOfBirth}</span>
            </div>
          )}
          {ancestry && (
            <div className="detail-page__field">
              <span className="detail-page__label">Ancestry:</span>
              <span className="detail-page__value">{ancestry}</span>
            </div>
          )}
          {eyeColour && (
            <div className="detail-page__field">
              <span className="detail-page__label">Eye Colour:</span>
              <span className="detail-page__value">{eyeColour}</span>
            </div>
          )}
          {hairColour && (
            <div className="detail-page__field">
              <span className="detail-page__label">Hair Colour:</span>
              <span className="detail-page__value">{hairColour}</span>
            </div>
          )}
          {patronus && (
            <div className="detail-page__field">
              <span className="detail-page__label">Patronus:</span>
              <span className="detail-page__value">{patronus}</span>
            </div>
          )}
          {wand?.wood && (
            <div className="detail-page__field">
              <span className="detail-page__label">Wand:</span>
              <span className="detail-page__value">
                {wand.wood}, {wand.core}{wand.length ? `, ${wand.length}"` : ''}
              </span>
            </div>
          )}
          {actor && (
            <div className="detail-page__field">
              <span className="detail-page__label">Actor:</span>
              <span className="detail-page__value">{actor}</span>
            </div>
          )}
          {alternate_names?.length > 0 && (
            <div className="detail-page__field">
              <span className="detail-page__label">Also known as:</span>
              <span className="detail-page__value">{alternate_names.join(', ')}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CharacterDetailPage;
