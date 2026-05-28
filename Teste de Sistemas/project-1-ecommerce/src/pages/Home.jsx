import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { PRODUCTS, formatPrice } from '../data/products'

export default function Home() {
  const [category, setCategory] = useState('todos')
  const [sort, setSort] = useState('relevancia')

  let filtered = category === 'todos'
    ? [...PRODUCTS]
    : PRODUCTS.filter(p => p.category === category)

  switch (sort) {
    case 'preco-asc':  filtered.sort((a, b) => a.price - b.price); break
    case 'preco-desc': filtered.sort((a, b) => b.price - a.price); break
    case 'nome':       filtered.sort((a, b) => a.name.localeCompare(b.name)); break
    default: break
  }

  const count = filtered.length

  return (
    <>
      <Header />
      <main className="container">
        <h1 className="page-title">Nossos Produtos</h1>
        <p className="page-subtitle">Explore nossa coleção e encontre o que você precisa</p>

        <section className="filters" data-cy="filters-section">
          <span className="filter-label">Filtrar:</span>

          <div className="filter-group">
            <label htmlFor="category-filter">Categoria</label>
            <select
              id="category-filter"
              className="filter-select"
              data-cy="category-filter"
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              <option value="todos">Todas as categorias</option>
              <option value="calcados">Calçados</option>
              <option value="roupas">Roupas</option>
              <option value="eletronicos">Eletrônicos</option>
              <option value="acessorios">Acessórios</option>
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="sort-filter">Ordenar por</label>
            <select
              id="sort-filter"
              className="filter-select"
              data-cy="sort-filter"
              value={sort}
              onChange={e => setSort(e.target.value)}
            >
              <option value="relevancia">Relevância</option>
              <option value="preco-asc">Menor Preço</option>
              <option value="preco-desc">Maior Preço</option>
              <option value="nome">Nome A–Z</option>
            </select>
          </div>

          <span className="results-count" id="results-count" data-cy="results-count">
            {count} produto{count !== 1 ? 's' : ''} encontrado{count !== 1 ? 's' : ''}
          </span>
        </section>

        <section id="product-grid" className="product-grid" data-cy="product-grid">
          {filtered.length === 0 ? (
            <div className="empty-state">
              <div className="icon">🔍</div>
              <p>Nenhum produto encontrado para este filtro.</p>
            </div>
          ) : (
            filtered.map(product => (
              <div
                key={product.id}
                className="product-card"
                data-cy="product-card"
                data-product-id={product.id}
              >
                <div className="product-image" data-cy="product-image">
                  {product.emoji}
                </div>
                <div className="product-info">
                  <span className="product-category">{product.categoryLabel}</span>
                  <h3 className="product-name" data-cy="product-name">{product.name}</h3>
                  <p className="product-price" data-cy="product-price">{formatPrice(product.price)}</p>
                  <Link
                    to={`/product/${product.id}`}
                    className="btn btn-primary"
                    data-cy="btn-ver-produto"
                  >
                    Ver Produto
                  </Link>
                </div>
              </div>
            ))
          )}
        </section>
      </main>
    </>
  )
}
