import { ReactNode, useState } from 'react'
import SidebarMenu from './SidebarMenu'
import TopNav from './TopNav'

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <div className="app-shell">
      <SidebarMenu aberto={menuAberto} onClose={() => setMenuAberto(false)} />
      <div className="content-shell">
        <TopNav onToggleMenu={() => setMenuAberto(!menuAberto)} />
        <main className="main-content">{children}</main>
      </div>
    </div>
  )
}