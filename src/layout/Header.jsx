import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../Context/ThemeContext';

function Header() {
  const { theme } = useTheme();

  return (
    <nav className="navbar navbar-expand-lg sticky-top" style={{ backgroundColor: theme.color }}>
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={theme.logo}
            alt="Fertility DOST"
            style={{ height: '35px' }}
          />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto fw-semibold gap-3">
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) => isActive ? "nav-link text-primary" : "nav-link text-dark"}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link text-danger" : "nav-link text-dark"}>About Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/programs" className={({ isActive }) => isActive ? "nav-link text-danger" : "nav-link text-dark"}>Programs</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/learn" className={({ isActive }) => isActive ? "nav-link text-danger" : "nav-link text-dark"}>Learn</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/get-the-app" className={({ isActive }) => isActive ? "nav-link text-danger" : "nav-link text-dark"}>Get The App</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/fertility-screening" className={({ isActive }) => isActive ? "nav-link text-danger" : "nav-link text-dark"}>Fertility Screening</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/experts" className={({ isActive }) => isActive ? "nav-link text-danger" : "nav-link text-dark"}>Experts</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/test" className={({ isActive }) => isActive ? "nav-link text-danger" : "nav-link text-dark"}>Tests</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
