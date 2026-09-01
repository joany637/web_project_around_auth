import { Link } from 'react-router-dom';
import logo from '../../images/Vector.png';

function Header({ loggedIn, onSignOut }) {
  return (
    <header className="header">
      <img
        src={logo}
        alt="palabra Around"
        className="header-vector"
      />
      {!loggedIn && (
        <nav className="header__navigation">
          
          <Link to="/signup" className="header__link">
            Registrarse
          </Link>
        </nav>
      )}
      {loggedIn && (
        <nav className="header__navigation">
          <button
            type="button"
            className="header__logout"
            onClick={onSignOut}
          >
            Cerrar sesión
          </button>
        </nav>
      )}
      <hr className="header-line" />
    </header>
  );
}

export default Header;