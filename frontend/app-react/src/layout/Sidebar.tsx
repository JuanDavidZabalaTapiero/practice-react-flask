// LINKS
import { NavLink } from "react-router-dom";

// CSS
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="bg-dark p-3" style={{ width: "250px" }}>
      {/* HOME */}
      <NavLink to="/" className="nav-link text-white">
        <i className="bi bi-house-fill"></i> Inicio
      </NavLink>

      {/* CATEGORIES */}
      <NavLink to="/categories" className="nav-link text-white">
        <i className="bi bi-bookmark-fill"></i> Categorías
      </NavLink>
    </aside>
  );
}
