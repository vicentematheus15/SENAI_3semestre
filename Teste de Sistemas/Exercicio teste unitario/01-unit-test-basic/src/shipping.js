export function calculateShipping(weight) {

  if (weight <= 0) {
    throw new Error("Peso inválido")
  }

  if (weight <= 1) {
    return 10
  }

  if (weight <= 5) {
    return 20
  }

  return 40
}