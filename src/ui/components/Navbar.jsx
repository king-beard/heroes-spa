import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light mb-3 p-2">
      <Link
        className="navbar-brand"
        to="/"
      >
        Asociaciones
      </Link>
      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : '' } `}
            to="/marvel"
          >
            Marvel
          </NavLink>
          <NavLink
            className={({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : '' } `}
            to="/dc"
          >
            DC
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-danger">king beard</span>
          <button className="nav-item nav-link btn">Logout</button>
        </ul>
      </div>
    </nav>
  )
}