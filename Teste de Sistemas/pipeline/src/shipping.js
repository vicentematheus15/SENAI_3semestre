/**
 * shipping.js
 * Cálculo de frete da TechStore.
 */

/** Calcula o frete com base no peso e no subtotal (frete grátis acima de R$ 300). */
export function calculateShipping(weightKg, subtotal) {
  if (weightKg < 0) throw new Error('Peso inválido.')
  if (subtotal < 0) throw new Error('Subtotal inválido.')

  // Frete grátis para compras acima de R$ 300.
  if (subtotal >= 300) return 0

  const base = 15
  const perKg = 5
  return Math.round((base + weightKg * perKg) * 100) / 100
}

/** Estima o prazo de entrega em dias úteis por região. */
export function estimateDeliveryDays(region) {
  const prazos = {
    sudeste: 2,
    sul: 3,
    'centro-oeste': 4,
    nordeste: 5,
    norte: 7,
  }
  const key = String(region).toLowerCase().trim()
  if (!(key in prazos)) {
    throw new Error(`Região desconhecida: ${region}`)
  }
  return prazos[key]
}
