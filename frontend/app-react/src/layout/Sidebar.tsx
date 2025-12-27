// LINKS
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <nav className="bg-dark text-white p-3" style={{ width: "25%" }}>
      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink to="/" className="nav-link text-white">
            Inicio
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/categories" className="nav-link text-white">
            Categorías
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
