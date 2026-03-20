import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <h1 className="header-container">
          <Link to="/" className="header-logo">Leona Sports</Link>
        </h1>
      </nav>
    </header>
  );
};
export default Header;