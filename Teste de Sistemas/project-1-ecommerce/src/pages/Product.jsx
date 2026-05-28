import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header'
import { getProductById, formatPrice } from '../data/products'

export default function Product() {
  const { id } = useParams()
  const product = getProductById(id)

  const [size, setSize] = useState('')
  const [quantity, setQuantity] = useState('1')
  const [sizeError, setSizeError] = useState(false)
  const [showToast, setShowToast] = useState(false)

  if (!product) {
    return (
      <>
        <Header />
        <main className="container">
          <div className="empty-state" style={{ gridColumn: '1/-1' }}>
            <div className="icon">😕</div>
            <p>Produto não encontrado.</p>
            <Link to="/" className="btn btn-primary" style={{ width: 'auto', marginTop: '1rem' }}>
              ← Voltar à loja
            </Link>
          </div>
        </main>
      </>
    )
  }

  function addToCart() {
    if (!size) {
      setSizeError(true)
      return
    }
    setSizeError(false)

    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    const qty = parseInt(quantity)
    const existingIndex = cart.findIndex(
      item => item.productId === product.id && item.size === size
    )

    if (existingIndex >= 0) {
      cart[existingIndex].quantity += qty
    } else {
      cart.push({
        productId: product.id,
        name: product.name,
        price: product.price,
        emoji: product.emoji,
        size,
        quantity: qty,
      })
    }

    localStorage.setItem('cart', JSON.stringify(cart))
    window.dispatchEvent(new Event('cartUpdated'))

    setShowToast(true)
    setTimeout(() => setShowToast(false), 3500)
  }

  return (
    <>
      <Header />
      <main className="container">
        <nav className="breadcrumb" data-cy="breadcrumb">
          <Link to="/">Início</Link>
          <span>›</span>
          <span id="breadcrumb-category">{product.categoryLabel}</span>
          <span>›</span>
          <span id="breadcrumb-name">{product.name}</span>
        </nav>

        <div className="product-detail">
          <div className="product-detail-image" data-cy="product-detail-image">
            {product.emoji}
          </div>

          <div className="product-detail-info">
            <span className="product-category">{product.categoryLabel}</span>

            <h1 className="product-detail-name" data-cy="product-detail-name">
              {product.name}
            </h1>

            <p className="product-detail-price" data-cy="product-detail-price">
              {formatPrice(product.price)}
            </p>

            <p className="product-detail-desc">{product.description}</p>

            <div className="form-group">
              <label htmlFor="size-select">Tamanho</label>
              <select
                id="size-select"
                data-cy="size-select"
                value={size}
                onChange={e => { setSize(e.target.value); setSizeError(false) }}
                className={sizeError ? 'error' : ''}
              >
                <option value="">Selecione o tamanho</option>
                {product.sizes.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <span
                id="size-error"
                className="error-msg"
                style={{ display: sizeError ? 'block' : 'none' }}
              >
                Por favor, selecione um tamanho.
              </span>
            </div>

            <div className="form-group">
              <label htmlFor="quantity-select">Quantidade</label>
              <select
                id="quantity-select"
                data-cy="quantity-select"
                value={quantity}
                onChange={e => setQuantity(e.target.value)}
              >
                {[1, 2, 3, 4, 5].map(q => (
                  <option key={q} value={q}>{q}</option>
                ))}
              </select>
            </div>

            <button
              className="btn btn-primary"
              id="add-to-cart"
              data-cy="btn-adicionar-carrinho"
              onClick={addToCart}
            >
              🛒 Adicionar ao Carrinho
            </button>

            <Link to="/" className="btn btn-secondary">← Continuar Comprando</Link>
          </div>
        </div>
      </main>

      <div
        id="toast"
        className={`toast${showToast ? ' show' : ''}`}
        data-cy="toast"
      >
        ✅ Produto adicionado ao carrinho!
        <Link to="/cart" style={{ color: 'white', marginLeft: '.5rem', textDecoration: 'underline' }}>
          Ver Carrinho
        </Link>
      </div>
    </>
  )
}
