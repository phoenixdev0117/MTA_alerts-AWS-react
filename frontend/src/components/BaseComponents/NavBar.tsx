import { NavLink } from 'react-router-dom'

const NavBar: React.FC = () => {
  return (
    <nav className="nav-bar">
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/about" className="nav-link">
        About
      </NavLink>
    </nav>
  )
}

export default NavBar
