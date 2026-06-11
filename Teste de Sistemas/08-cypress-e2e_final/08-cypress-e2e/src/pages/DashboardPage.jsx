import React from 'react'
import StatCard from '../components/StatCard.jsx'
import OrderTable from '../components/OrderTable.jsx'
import { useOrders } from '../hooks/useOrders.js'
import { formatCurrency } from '../lib/orderService.js'

export default function DashboardPage() {
  const { stats } = useOrders()

  return (
    <>
      <section className="stats-grid">
        <StatCard
          title="Receita Total"
          value={formatCurrency(stats.totalRevenue)}
          variant="revenue"
          testId="stat-revenue"
        />
        <StatCard
          title="Total de Pedidos"
          value={stats.totalOrders}
          variant=""
          testId="stat-orders"
        />
        <StatCard
          title="Pendentes"
          value={stats.pendingCount}
          variant="pending"
          testId="stat-pending"
        />
        <StatCard
          title="Cancelados"
          value={stats.cancelledCount}
          variant="cancelled"
          testId="stat-cancelled"
        />
      </section>

      <section className="card" data-testid="recent-orders">
        <h2>Pedidos Recentes</h2>
        <OrderTable orders={stats.recentOrders} />
      </section>
    </>
  )
}
