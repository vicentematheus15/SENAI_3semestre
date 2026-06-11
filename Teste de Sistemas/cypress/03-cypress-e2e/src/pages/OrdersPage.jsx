import React, { useState } from 'react'
import OrderTable from '../components/OrderTable.jsx'
import OrderForm from '../components/OrderForm.jsx'
import ToastContainer from '../components/ToastContainer.jsx'
import { useOrders } from '../hooks/useOrders.js'
import { validateOrder, notify } from '../lib/orderService.js'

export default function OrdersPage() {
  const { orders, addOrder, updateStatus } = useOrders()
  const [filter, setFilter] = useState('all')
  const [toasts, setToasts] = useState([])

  function pushToast(message, type = 'success') {
    const id = Date.now() + Math.random()
    setToasts(prev => [...prev, { id, message, type }])
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id))
    }, 3000)
  }

  function handleAdd(data) {
    try {
      const service = window.orderService || { validateOrder, notify }
      service.validateOrder(data)
      const order = addOrder(data)
      service.notify('order:created', order)
      pushToast(`Pedido #${order.id} criado com sucesso!`, 'success')
    } catch (err) {
      pushToast(err.message, 'error')
    }
  }

  function handleUpdate(id, status) {
    const service = window.orderService || { notify }
    updateStatus(id, status)
    const label = status === 'completed' ? 'concluído' : 'cancelado'
    service.notify('order:updated', { id, status })
    pushToast(`Pedido #${id} ${label}.`, 'success')
  }

  const filtered = filter === 'all'
    ? orders
    : orders.filter(o => o.status === filter)

  return (
    <>
      <OrderForm onSubmit={handleAdd} />

      <section className="card" data-testid="orders-list">
        <div className="filters">
          <h2 style={{ margin: 0 }}>Lista de Pedidos</h2>
          <select
            data-testid="filter-status"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">Todos</option>
            <option value="pending">Pendentes</option>
            <option value="completed">Concluídos</option>
            <option value="cancelled">Cancelados</option>
          </select>
        </div>
        <OrderTable orders={filtered} onUpdateStatus={handleUpdate} />
      </section>

      <ToastContainer toasts={toasts} />
    </>
  )
}
