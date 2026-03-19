import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="main-header">
      <nav>
        <h1 className="nav-container">
          <Link to="/" className="nav-logo">Leona Sports</Link>
          <p>Tu tienda de deportes en línea</p>
        </h1>
      </nav>
    </header>
  );
};
export default Header;