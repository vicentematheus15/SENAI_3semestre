export function applyDiscount(price, percentage) {

  if (percentage < 0 || percentage > 100) {
    throw new Error("Desconto inválido")
  }

  const discount = price * (percentage / 100)

  return price - discount
}