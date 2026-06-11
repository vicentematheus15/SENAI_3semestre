import React, { useState } from 'react'

export default function OrderForm({ onSubmit }) {
  const [customer, setCustomer] = useState('')
  const [product, setProduct] = useState('')
  const [amount, setAmount] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit({
      customer: customer.trim(),
      product: product.trim(),
      amount: parseFloat(amount)
    })
    setCustomer('')
    setProduct('')
    setAmount('')
  }

  return (
    <form onSubmit={handleSubmit} data-testid="order-form" className="card">
      <h2>Novo Pedido</h2>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="customer">Cliente</label>
          <input
            id="customer"
            className="form-control"
            data-testid="input-customer"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
            placeholder="Nome do cliente"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="product">Produto</label>
          <input
            id="product"
            className="form-control"
            data-testid="input-product"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            placeholder="Nome do produto"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Valor (R$)</label>
          <input
            id="amount"
            type="number"
            step="0.01"
            min="0.01"
            className="form-control"
            data-testid="input-amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0,00"
            required
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary" data-testid="submit-order">
        Adicionar Pedido
      </button>
    </form>
  )
}
