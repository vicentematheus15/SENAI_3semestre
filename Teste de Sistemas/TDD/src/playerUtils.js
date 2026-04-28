/**
 * playerUtils.js
 * Utilitários de Jogador — Ranking de Jogadores
 *
 * ❌ NÃO modifique os nomes das funções nem os parâmetros.
 * ✅ Sua missão: implementar cada função até todos os testes passarem.
 *
 * Fluxo TDD:
 *   1. Rode os testes → veja tudo VERMELHO
 *   2. Implemente UMA função por vez
 *   3. Rode novamente → veja ela ficar VERDE
 *   4. Repita até todos os testes passarem
 */

export function calcWinRate(wins, totalGames){
    if(totalGames === 0){
        throw new Error("O numero de jogos não pode ser zero.")        
    }
    if(wins > totalGames || wins < 0){
        throw new Error("O número de vitórias não pode ser negativo ou maior que o número de jogos.");
    }
    return (wins / totalGames) * 100
}
