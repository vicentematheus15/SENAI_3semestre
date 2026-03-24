export function validateProduct(product) {

  if (!product.name) {
    throw new Error("Nome obrigatório")
  }

  if (product.price <= 0) {
    throw new Error("Preço inválido")
  }

  if (product.stock < 0) {
    throw new Error("Estoque inválido")
  }

  return true
}