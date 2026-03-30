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

export function calculateDiscountedPrice(price, discountPercent) {}
