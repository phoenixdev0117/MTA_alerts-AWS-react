import { NavLink } from 'react-router-dom'

const NavBar: React.FC = () => {
  return (
    <nav className="nav-bar">
      <NavLink to="/" className="nav-link m-2">
        Home
      </NavLink>
      <NavLink to="/about" className="nav-link m-2">
        About
      </NavLink>
    </nav>
  )
}

export default NavBar
