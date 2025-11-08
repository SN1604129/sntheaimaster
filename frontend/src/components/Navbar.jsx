import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png"; // ← add this

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-3 py-2 rounded-xl transition ${isActive ? "bg-white/10" : "hover:bg-white/5"}`
    }
  >
    {children}
  </NavLink>
);

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-navy/70 border-b border-white/10">
      <div className="container h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={Logo} alt="SNTheAIMaster" className="h-7 w-auto" />
          <span className="sr-only">SNTheAIMaster</span>
        </Link>
        <nav className="flex items-center gap-1">
          <NavItem to="/projects">Projects</NavItem>
          <NavItem to="/stories">Data Stories</NavItem>
          <NavItem to="/kaggle">Kaggle</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </nav>
      </div>
    </header>
  );
}
