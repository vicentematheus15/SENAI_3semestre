import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { formatPrice } from '../data/products'

const FRETE_PRECOS = { economico: 19.90, expresso: 39.90, retirada: 0.00 }

function generateOrderId() {
  return 'ST-' + Date.now().toString().slice(-6)
}

export default function Checkout() {
  const navigate = useNavigate()
  const [cart] = useState(() => JSON.parse(localStorage.getItem('cart') || '[]'))
  const [form, setForm] = useState({
    nome: '', email: '', cep: '', endereco: '',
    numero: '', complemento: '', cidade: '',
    estado: '', frete: '', pagamento: '',
  })
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (cart.length === 0) navigate('/cart')
  }, [])

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const frete    = form.frete ? (FRETE_PRECOS[form.frete] ?? 0) : 0
  const pixDesc  = form.pagamento === 'pix' ? subtotal * 0.05 : 0
  const total    = subtotal + frete - pixDesc

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.id]: e.target.value }))
  }

  function validate() {
    const rules = [
      { id: 'nome',      msg: 'Nome é obrigatório' },
      { id: 'email',     msg: 'E-mail é obrigatório', type: 'email' },
      { id: 'cep',       msg: 'CEP é obrigatório' },
      { id: 'endereco',  msg: 'Endereço é obrigatório' },
      { id: 'numero',    msg: 'Número é obrigatório' },
      { id: 'cidade',    msg: 'Cidade é obrigatória' },
      { id: 'estado',    msg: 'Selecione o estado' },
      { id: 'frete',     msg: 'Selecione o tipo de frete' },
      { id: 'pagamento', msg: 'Selecione a forma de pagamento' },
    ]
    const newErrors = {}
    rules.forEach(({ id, msg, type }) => {
      const val = form[id].trim()
      if (!val) {
        newErrors[id] = msg
      } else if (type === 'email' && !val.includes('@')) {
        newErrors[id] = 'E-mail inválido.'
      }
    })
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) return

    const order = {
      id:       generateOrderId(),
      items:    cart,
      customer: { nome: form.nome, email: form.email },
      delivery: {
        cep:         form.cep,
        endereco:    form.endereco,
        numero:      form.numero,
        complemento: form.complemento,
        cidade:      form.cidade,
        estado:      form.estado,
      },
      shipping: form.frete,
      payment:  form.pagamento,
      date:     new Date().toISOString(),
    }

    localStorage.setItem('lastOrder', JSON.stringify(order))
    localStorage.removeItem('cart')
    window.dispatchEvent(new Event('cartUpdated'))
    navigate('/success')
  }

  const field = (id, label, type = 'text', placeholder = '', extra = {}) => (
    <div className="form-group" style={{ marginBottom: '1rem' }}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        data-cy={`input-${id}`}
        value={form[id]}
        onChange={handleChange}
        className={errors[id] ? 'error' : ''}
        {...extra}
      />
      <span className="error-msg" id={`erro-${id}`}>{errors[id] || ''}</span>
    </div>
  )

  return (
    <>
      <Header />
      <main className="container">
        <h1 className="page-title">Finalizar Compra</h1>

        <div className="checkout-grid">
          <div>
            <form
              id="checkout-form"
              className="checkout-form"
              noValidate
              data-cy="checkout-form"
              onSubmit={handleSubmit}
            >
              <h2>📦 Dados de Entrega</h2>

              {field('nome', 'Nome completo *', 'text', 'Ex: João da Silva')}
              {field('email', 'E-mail *', 'email', 'Ex: joao@email.com')}

              <div className="form-row" style={{ marginBottom: '1rem' }}>
                {field('cep', 'CEP *', 'text', '00000-000', { maxLength: 9 })}
                {field('cidade', 'Cidade *', 'text', 'Sua cidade')}
              </div>

              {field('endereco', 'Endereço *', 'text', 'Rua, Avenida...')}

              <div className="form-row" style={{ marginBottom: '1.25rem' }}>
                {field('numero', 'Número *', 'text', '123')}
                <div className="form-group">
                  <label htmlFor="complemento">Complemento</label>
                  <input
                    type="text"
                    id="complemento"
                    placeholder="Apto, Bloco..."
                    data-cy="input-complemento"
                    value={form.complemento}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="estado">Estado *</label>
                <select
                  id="estado"
                  data-cy="select-estado"
                  value={form.estado}
                  onChange={handleChange}
                  className={errors.estado ? 'error' : ''}
                >
                  <option value="">Selecione o estado</option>
                  <option value="AC">Acre (AC)</option>
                  <option value="AL">Alagoas (AL)</option>
                  <option value="AP">Amapá (AP)</option>
                  <option value="AM">Amazonas (AM)</option>
                  <option value="BA">Bahia (BA)</option>
                  <option value="CE">Ceará (CE)</option>
                  <option value="DF">Distrito Federal (DF)</option>
                  <option value="ES">Espírito Santo (ES)</option>
                  <option value="GO">Goiás (GO)</option>
                  <option value="MA">Maranhão (MA)</option>
                  <option value="MT">Mato Grosso (MT)</option>
                  <option value="MS">Mato Grosso do Sul (MS)</option>
                  <option value="MG">Minas Gerais (MG)</option>
                  <option value="PA">Pará (PA)</option>
                  <option value="PB">Paraíba (PB)</option>
                  <option value="PR">Paraná (PR)</option>
                  <option value="PE">Pernambuco (PE)</option>
                  <option value="PI">Piauí (PI)</option>
                  <option value="RJ">Rio de Janeiro (RJ)</option>
                  <option value="RN">Rio Grande do Norte (RN)</option>
                  <option value="RS">Rio Grande do Sul (RS)</option>
                  <option value="RO">Rondônia (RO)</option>
                  <option value="RR">Roraima (RR)</option>
                  <option value="SC">Santa Catarina (SC)</option>
                  <option value="SP">São Paulo (SP)</option>
                  <option value="SE">Sergipe (SE)</option>
                  <option value="TO">Tocantins (TO)</option>
                </select>
                <span className="error-msg" id="erro-estado">{errors.estado || ''}</span>
              </div>

              <h2>🚚 Forma de Envio</h2>

              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="frete">Tipo de frete *</label>
                <select
                  id="frete"
                  data-cy="select-frete"
                  value={form.frete}
                  onChange={handleChange}
                  className={errors.frete ? 'error' : ''}
                >
                  <option value="">Selecione o frete</option>
                  <option value="economico">📦 Econômico — 7 a 10 dias úteis — R$ 19,90</option>
                  <option value="expresso">⚡ Expresso — 2 a 3 dias úteis — R$ 39,90</option>
                  <option value="retirada">🏪 Retirada na Loja — Grátis</option>
                </select>
                <span className="error-msg" id="erro-frete">{errors.frete || ''}</span>
              </div>

              <h2>💳 Forma de Pagamento</h2>

              <div className="form-group" style={{ marginBottom: '1.75rem' }}>
                <label htmlFor="pagamento">Pagamento *</label>
                <select
                  id="pagamento"
                  data-cy="select-pagamento"
                  value={form.pagamento}
                  onChange={handleChange}
                  className={errors.pagamento ? 'error' : ''}
                >
                  <option value="">Selecione o pagamento</option>
                  <option value="cartao-credito">💳 Cartão de Crédito</option>
                  <option value="boleto">📄 Boleto Bancário</option>
                  <option value="pix">⚡ PIX — 5% de desconto</option>
                </select>
                <span className="error-msg" id="erro-pagamento">{errors.pagamento || ''}</span>
              </div>

              <button
                type="submit"
                className="btn btn-success"
                style={{ fontSize: '1.05rem', padding: '.9rem' }}
                data-cy="btn-comprar"
              >
                ✅ Confirmar Compra
              </button>
            </form>
          </div>

          <aside id="order-summary" className="order-summary" data-cy="order-summary">
            <h3>📋 Resumo do Pedido</h3>

            {cart.map((item, i) => (
              <div key={i} className="order-item">
                <span style={{ fontSize: '1.5rem' }}>{item.emoji}</span>
                <div className="order-item-name">
                  {item.name}
                  <div style={{ fontSize: '.75rem', color: 'var(--text-muted)' }}>
                    Tam: {item.size} × {item.quantity}
                  </div>
                </div>
                <span className="order-item-price">{formatPrice(item.price * item.quantity)}</span>
              </div>
            ))}

            <div style={{ marginTop: '1rem' }}>
              <div className="order-total-row">
                <span>Subtotal</span>
                <span data-cy="summary-subtotal">{formatPrice(subtotal)}</span>
              </div>
              <div className="order-total-row">
                <span>Frete</span>
                <span data-cy="summary-frete">
                  {form.frete ? (frete === 0 ? 'Grátis' : formatPrice(frete)) : '—'}
                </span>
              </div>
              {pixDesc > 0 && (
                <div className="order-total-row" style={{ color: 'var(--success)' }}>
                  <span>Desconto PIX (5%)</span>
                  <span data-cy="summary-desconto">− {formatPrice(pixDesc)}</span>
                </div>
              )}
              <div className="order-total-row total">
                <span>Total</span>
                <span data-cy="summary-total">{formatPrice(total)}</span>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </>
  )
}
