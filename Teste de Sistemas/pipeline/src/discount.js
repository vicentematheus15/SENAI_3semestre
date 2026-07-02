/**
 * discount.js
 * Regras de desconto da TechStore.
 *
 * Projeto simples de exemplo para demonstrar o pipeline de CI.
 * A lógica é intencionalmente pequena — o foco está na AUTOMAÇÃO,
 * não na complexidade do código.
 */

/** Aplica desconto percentual a um preço. */
export function applyDiscount(price, percent) {
  if (typeof price !== 'number' || price < 0) {
    throw new Error('Preço inválido.')
  }
  if (typeof percent !== 'number' || percent < 0 || percent > 100) {
    throw new Error('Percentual deve estar entre 0 e 100.')
  }
  const discounted = price - (price * percent) / 100
  // Arredonda para 2 casas para evitar problemas de ponto flutuante.
  return Math.round(discounted * 100) / 100
}

/** Calcula o desconto por faixa de valor do carrinho. */
export function tierDiscount(subtotal) {
  if (subtotal < 0) throw new Error('Subtotal inválido.')
  if (subtotal >= 500) return 15
  if (subtotal >= 200) return 10
  if (subtotal >= 100) return 5
  return 0
}

/** Calcula o preço final com cupom + desconto por faixa. */
export function calculateFinalPrice(subtotal, couponPercent = 0) {
  const tier = tierDiscount(subtotal)
  const totalPercent = tier + couponPercent
  // O desconto total nunca pode passar de 100%.
  const capped = Math.min(totalPercent, 100)
  return applyDiscount(subtotal, capped)
}
