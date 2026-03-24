export function calculateTotal(price, quantity) {

  if (price <= 0) {
    throw new Error("Preço inválido")
  }

  if (quantity <= 0) {
    throw new Error("Quantidade inválida")
  }

  return price * quantity
}