import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ seccion }) => {
  return (
    <header className="main-header">
      <h1 className="nav-container">
      <nav>
        <Link to="/" className="nav-logo">Leona Sports</Link>
        <AuthStatus seccion={seccion} />
        <p>Tu tienda de deportes en línea</p>
      </nav>
      </h1>
    </header>
  );
};
export default Header;