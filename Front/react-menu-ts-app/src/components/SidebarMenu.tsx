import { NavLink } from 'react-router-dom'

type SidebarMenuProps = {
  aberto: boolean
  onClose: () => void
}

const links = [
  { to: '/', label: 'Início' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/servicos', label: 'Serviços' },
  { to: '/contato', label: 'Contato' },
  { to: '/perfil', label: 'Perfil' },
  { to: '/disciplinas', label: 'Disciplinas'}
]

export default function SidebarMenu({ aberto, onClose }: SidebarMenuProps) {
  return (
    <>
      {aberto && <div className="overlay" onClick={onClose}></div>}
      <aside className={`sidebar ${aberto ? 'open' : ''}`}>
        <h2>Meu App</h2>
        <p className="sidebar-subtitle">React + TypeScript</p>
        <nav>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={onClose}
              className={({ isActive }) =>
                isActive ? 'menu-link active-link' : 'menu-link'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  )
}