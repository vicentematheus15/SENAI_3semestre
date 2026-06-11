import React from 'react'

const STATUS_CLASSES = {
  pending: 'badge-pending',
  completed: 'badge-completed',
  cancelled: 'badge-cancelled'
}

const STATUS_LABELS = {
  pending: 'Pendente',
  completed: 'Concluído',
  cancelled: 'Cancelado'
}

export default function OrderTable({ orders, onUpdateStatus }) {
  if (orders.length === 0) {
    return (
      <div className="empty-state" data-testid="empty-orders">
        Nenhum pedido encontrado.
      </div>
    )
  }

  return (
    <table data-testid="orders-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Cliente</th>
          <th>Produto</th>
          <th>Valor</th>
          <th>Status</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {orders.map(order => (
          <tr key={order.id} data-testid={`order-row-${order.id}`}>
            <td>{order.id}</td>
            <td>{order.customer}</td>
            <td>{order.product}</td>
            <td>R$ {order.amount.toFixed(2)}</td>
            <td>
              <span className={`badge ${STATUS_CLASSES[order.status]}`}>
                {STATUS_LABELS[order.status]}
              </span>
            </td>
            <td>
              {order.status === 'pending' && (
                <>
                  <button
                    className="btn btn-success btn-sm"
                    data-testid={`complete-btn-${order.id}`}
                    onClick={() => onUpdateStatus(order.id, 'completed')}
                  >
                    Concluir
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    style={{ marginLeft: '0.5rem' }}
                    data-testid={`cancel-btn-${order.id}`}
                    onClick={() => onUpdateStatus(order.id, 'cancelled')}
                  >
                    Cancelar
                  </button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
