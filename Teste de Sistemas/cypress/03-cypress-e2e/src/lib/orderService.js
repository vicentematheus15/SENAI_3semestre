/**
 * orderService.js
 * Funções puras de negócio expostas no window para Spies/Stubs no Cypress.
 */

export function formatCurrency(value) {
  const parts = value.toFixed(2).split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  return `R$ ${parts.join(',')}`
}

export function notify(eventName, payload) {
  window.dispatchEvent(new CustomEvent(eventName, { detail: payload }))
}

export function validateOrder(data) {
  if (!data.customer || data.customer.trim().length === 0) {
    throw new Error('Cliente é obrigatório.')
  }
  if (!data.product || data.product.trim().length === 0) {
    throw new Error('Produto é obrigatório.')
  }
  if (typeof data.amount !== 'number' || data.amount <= 0) {
    throw new Error('Valor deve ser um número maior que zero.')
  }
  return true
}

// Expõe no window para Cypress
if (typeof window !== 'undefined') {
  window.orderService = { formatCurrency, notify, validateOrder }
}
