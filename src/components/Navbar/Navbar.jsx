import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar__logo">
        <span className="navbar__logo-icon">⚡</span>
        <span className="navbar__logo-text">Harry Potter Universe</span>
      </NavLink>
      <ul className="navbar__links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'navbar__link active' : 'navbar__link'
            }
            end
          >
            All Characters
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/students"
            className={({ isActive }) =>
              isActive ? 'navbar__link active' : 'navbar__link'
            }
          >
            Students
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/staff"
            className={({ isActive }) =>
              isActive ? 'navbar__link active' : 'navbar__link'
            }
          >
            Staff
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/houses"
            className={({ isActive }) =>
              isActive ? 'navbar__link active' : 'navbar__link'
            }
          >
            Houses
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
