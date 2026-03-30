/**
 * coreMath.js
 * Motor Matemático da TechStore
 *
 * Implemente as quatro operações matemáticas abaixo.
 * Não altere os nomes das funções nem os parâmetros.
 *
 * Regras:
 *  - Cada função recebe dois números e retorna o resultado.
 *  - A função divide() deve lançar um Error se o segundo
 *    parâmetro for zero.
 */

export function add(a, b) {
    return a + b
}

export function subtract(a, b) {
    return a - b
}

export function multiply(a, b) {
    return a * b
}

export function divide(a, b) {
    if(b === 0){
        throw new Error("Não é possível dividir por 0!");
    }
    return a / b
}

// console.log(add(2, -3))
// console.log(subtract(6, 12));
// console.log(multiply(2, -5));
// console.log(divide(9, 1));

