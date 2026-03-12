import { HOUSES } from '../../constants/api';
import './HouseFilter.css';

const HouseFilter = ({ selectedHouse, onSelectHouse }) => {
  return (
    <div className="house-filter">
      {HOUSES.map((house) => (
        <button
          key={house}
          className={`house-filter__btn house-filter__btn--${house.toLowerCase()} ${
            selectedHouse === house ? 'active' : ''
          }`}
          onClick={() => onSelectHouse(house === selectedHouse ? '' : house)}
        >
          {house}
        </button>
      ))}
    </div>
  );
};

export default HouseFilter;
