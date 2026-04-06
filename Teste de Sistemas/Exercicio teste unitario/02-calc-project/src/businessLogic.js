/**
 * businessLogic.js
 * Regras de Negócio da TechStore
 *
 * Implemente as duas funções de negócio abaixo.
 * Não altere os nomes das funções nem os parâmetros.
 *
 * Regras:
 *  - NÃO use os operadores nativos (+, -, *, /) diretamente.
 *  - OBRIGATÓRIO: importe e use as funções de coreMath.js.
 *  - Valide as entradas e lance Errors quando necessário.
 */

 import { add, subtract, multiply, divide } from './coreMath.js';

export function calculateAverage(purchases) {
    if(!Array.isArray(purchases) || purchases.length === 0){
        throw new Error("A entrada deve ser um array não vazio")
    }

    const totalValue = purchases.reduce((somaAcumulada, valorAtual) => {
        if(typeof valorAtual !== 'number'){
            throw new Error("A entrada deve ser um número")
        }
        return add(somaAcumulada, valorAtual)
    }, 0);

    return divide(totalValue, purchases.length)
}

export function calculateDiscountedPrice(price, discountPercent) {
    if(price <= 0){
        throw new Error("O preço deve ser maior ou igual a zero!")
    } 

    if(discountPercent < 0 || discountPercent > 100 ){
        throw new Error("O desconto deve ser entre 0% e 100%");   
    }
    
    const multiplyValue = multiply(price, discountPercent);
    const discountValue = divide(multiplyValue, 100);
    
    return subtract(price, discountValue)
}

console.log(calculateDiscountedPrice(200, 10))