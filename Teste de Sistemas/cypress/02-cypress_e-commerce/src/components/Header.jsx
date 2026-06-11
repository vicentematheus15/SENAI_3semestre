import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function getCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]')
  return cart.reduce((sum, item) => sum + item.quantity, 0)
}

export default function Header() {
  const [count, setCount] = useState(getCartCount)

  useEffect(() => {
    const handler = () => setCount(getCartCount())
    window.addEventListener('cartUpdated', handler)
    return () => window.removeEventListener('cartUpdated', handler)
  }, [])

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo">🛒 ShopTest</Link>
        <nav className="nav">
          <Link to="/">Início</Link>
          <Link to="/cart" className="cart-link" data-cy="cart-link">
            🛒 Carrinho
            <span
              className="cart-badge"
              id="cart-badge"
              style={{ display: count > 0 ? 'inline' : 'none' }}
            >
              {count}
            </span>
          </Link>
        </nav>
      </div>
    </header>
  )
}
