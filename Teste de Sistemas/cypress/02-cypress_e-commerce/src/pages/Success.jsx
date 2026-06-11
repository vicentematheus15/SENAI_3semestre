import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../components/Header'

const FRETE_LABEL = {
  economico: '📦 Econômico (7–10 dias)',
  expresso:  '⚡ Expresso (2–3 dias)',
  retirada:  '🏪 Retirada na Loja',
}

const PAGAMENTO_LABEL = {
  'cartao-credito': '💳 Cartão de Crédito',
  boleto:           '📄 Boleto Bancário',
  pix:              '⚡ PIX',
}

export default function Success() {
  const navigate = useNavigate()
  const order = JSON.parse(localStorage.getItem('lastOrder') || 'null')

  useEffect(() => {
    if (!order) navigate('/')
  }, [])

  if (!order) return null

  return (
    <>
      <Header />
      <main className="container">
        <div className="success-page">
          <div className="success-card" data-cy="success-card">
            <div className="success-icon">✅</div>

            <h1 className="success-title" data-cy="success-title">
              Pedido Realizado com Sucesso!
            </h1>

            <p className="success-subtitle">
              Obrigado pela sua compra! Você receberá um e-mail de confirmação em breve.
            </p>

            <div className="order-number" data-cy="order-number">
              <div className="label">Número do Pedido</div>
              <div className="value" id="order-id">{order.id}</div>
            </div>

            <div id="order-details" data-cy="order-details">
              <div style={{
                background: 'var(--bg)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '1.25rem',
                textAlign: 'left',
                marginBottom: '1rem',
              }}>
                <div style={{ marginBottom: '.75rem', paddingBottom: '.75rem', borderBottom: '1px dashed var(--border)' }}>
                  <strong>Cliente:</strong> {order.customer.nome}<br />
                  <small style={{ color: 'var(--text-muted)' }}>{order.customer.email}</small>
                </div>
                <div style={{ marginBottom: '.75rem' }}>
                  <strong>Entrega:</strong>{' '}
                  {order.delivery.endereco}, {order.delivery.numero}
                  {order.delivery.complemento ? ` — ${order.delivery.complemento}` : ''}
                  {' — '}{order.delivery.cidade}/{order.delivery.estado}
                  {' '}(CEP: {order.delivery.cep})
                </div>
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                  <span><strong>Frete:</strong> {FRETE_LABEL[order.shipping] || order.shipping}</span>
                  <span><strong>Pagamento:</strong> {PAGAMENTO_LABEL[order.payment] || order.payment}</span>
                </div>
              </div>
            </div>

            <Link
              to="/"
              className="btn btn-primary"
              style={{ marginTop: '1.5rem' }}
              data-cy="btn-continuar-comprando"
            >
              🛍️ Continuar Comprando
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
