import React from 'react'

export default function Layout({ children, activePage, onNavigate }) {
  return (
    <>
      <header>
        <div className="container">
          <h1>TechStore Dashboard</h1>
          <nav>
            <a
              href="#dashboard"
              data-testid="nav-dashboard"
              className={activePage === 'dashboard' ? 'active' : ''}
              onClick={() => { onNavigate('dashboard') }}
            >
              Dashboard
            </a>
            <a
              href="#orders"
              data-testid="nav-orders"
              className={activePage === 'orders' ? 'active' : ''}
              onClick={() => { onNavigate('orders') }}
            >
              Pedidos
            </a>
          </nav>
        </div>
      </header>
      <main className="container">
        {children}
      </main>
    </>
  )
}
