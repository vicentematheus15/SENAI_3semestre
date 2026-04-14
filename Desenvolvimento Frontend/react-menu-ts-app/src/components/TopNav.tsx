import { Link, NavLink } from 'react-router-dom'

type TopNavProps = {
  onToggleMenu: () => void
}

export default function TopNav({ onToggleMenu }: TopNavProps) {
  return (
    <header className="topnav">
      <div className="topnav-left">
        <button className="menu-button" onClick={onToggleMenu}>
          ☰
        </button>
        <Link to="/" className="brand">
          Menu App
        </Link>
      </div>

      <nav className="topnav-links">
        <NavLink to="/" className="top-link">
          Início
        </NavLink>
        <NavLink to="/sobre" className="top-link">
          Sobre
        </NavLink>
        <NavLink to="/contato" className="top-link">
          Contato
        </NavLink>
      </nav>
    </header>
  )
}