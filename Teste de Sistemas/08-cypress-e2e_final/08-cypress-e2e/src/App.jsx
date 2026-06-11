import React, { useState } from 'react'
import Layout from './components/Layout.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import OrdersPage from './pages/OrdersPage.jsx'

export default function App() {
  const [page, setPage] = useState('dashboard')

  return (
    <Layout activePage={page} onNavigate={setPage}>
      {page === 'dashboard' && <DashboardPage />}
      {page === 'orders' && <OrdersPage />}
    </Layout>
  )
}
