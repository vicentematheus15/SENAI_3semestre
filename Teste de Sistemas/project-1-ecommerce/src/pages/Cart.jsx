import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { formatPrice } from '../data/products'

export default function Cart() {
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart') || '[]'))

  function removeItem(index) {
    const newCart = [...cart]
    newCart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(newCart))
    window.dispatchEvent(new Event('cartUpdated'))
    setCart(newCart)
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <>
      <Header />
      <main className="container">
        <h1 className="page-title">Meu Carrinho</h1>
        <div id="cart-content">
          {cart.length === 0 ? (
            <div className="empty-state" style={{ textAlign: 'center', padding: '4rem 0' }}>
              <div className="icon">🛒</div>
              <h2 style={{ marginBottom: '.5rem' }}>Seu carrinho está vazio</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Adicione produtos para continuar comprando.
              </p>
              <Link to="/" className="btn btn-primary" style={{ width: 'auto' }}>
                Explorar Produtos
              </Link>
            </div>
          ) : (
            <>
              <table className="cart-table" data-cy="cart-table">
                <thead>
                  <tr>
                    <th>Produto</th>
                    <th>Preço unit.</th>
                    <th>Qtd</th>
                    <th>Subtotal</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, index) => (
                    <tr key={index} data-cy="cart-item" data-index={index}>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
                          <span style={{ fontSize: '2rem' }}>{item.emoji}</span>
                          <div>
                            <div className="cart-item-name" data-cy="cart-item-name">{item.name}</div>
                            <div className="cart-item-meta">Tamanho: {item.size} · Qtd: {item.quantity}</div>
                          </div>
                        </div>
                      </td>
                      <td>{formatPrice(item.price)}</td>
                      <td>{item.quantity}</td>
                      <td data-cy="cart-item-subtotal">
                        <strong>{formatPrice(item.price * item.quantity)}</strong>
                      </td>
                      <td>
                        <button
                          className="remove-btn"
                          data-cy="btn-remover"
                          onClick={() => removeItem(index)}
                          title="Remover item"
                        >✕</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="cart-summary" data-cy="cart-summary">
                <div className="cart-summary-row">
                  <span>Subtotal</span>
                  <span data-cy="cart-subtotal">{formatPrice(subtotal)}</span>
                </div>
                <div className="cart-summary-row">
                  <span>Frete</span>
                  <span>Calculado no checkout</span>
                </div>
                <div className="cart-summary-row">
                  <span>Total estimado</span>
                  <span data-cy="cart-total">{formatPrice(subtotal)}</span>
                </div>

                <Link
                  to="/checkout"
                  className="btn btn-primary"
                  style={{ marginTop: '1rem' }}
                  data-cy="btn-finalizar-compra"
                >
                  Finalizar Compra →
                </Link>

                <Link
                  to="/"
                  className="btn btn-secondary"
                  style={{ marginTop: '.5rem' }}
                >
                  ← Continuar Comprando
                </Link>
              </div>
            </>
          )}
        </div>
      </main>
    </>
  )
}
