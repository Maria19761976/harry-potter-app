import { useNavigate } from 'react-router-dom';
import './CharacterCard.css';

const PLACEHOLDER_ICON = '🧙';

const getHouseClass = (house) => {
  if (!house) return 'default';
  return house.toLowerCase();
};

const CharacterCard = ({ character }) => {
  const navigate = useNavigate();
  const { name, house, image, actor, alive, hogwartsStudent, hogwartsStaff } = character;

  const handleClick = () => {
    navigate(`/character/${encodeURIComponent(name)}`);
  };

  const role = hogwartsStudent ? 'Student' : hogwartsStaff ? 'Staff' : 'Other';

  return (
    <article className="character-card" onClick={handleClick} role="button" tabIndex={0}>
      <div className="character-card__image-wrapper">
        {image ? (
          <img src={image} alt={name} className="character-card__image" loading="lazy" />
        ) : (
          <span className="character-card__placeholder">{PLACEHOLDER_ICON}</span>
        )}
      </div>
      <div className="character-card__body">
        <h3 className="character-card__name">{name}</h3>
        <p className={`character-card__house character-card__house--${getHouseClass(house)}`}>
          {house || 'No house'}
        </p>
        <p className="character-card__meta">{actor ? `Played by ${actor}` : 'Unknown actor'}</p>
        <p className="character-card__meta">Role: {role}</p>
        <span className={`character-card__badge character-card__badge--${alive ? 'alive' : 'deceased'}`}>
          {alive ? 'Alive' : 'Deceased'}
        </span>
      </div>
    </article>
  );
};

export default CharacterCard;
