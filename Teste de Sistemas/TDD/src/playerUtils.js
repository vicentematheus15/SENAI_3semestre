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
    if(wins < 0 ||totalGames < 0 ){
        throw new Error("O número de vitórias ou de jogos não podem ser negativos.");
    }
    if(wins > totalGames){
        throw new Error("O número de vitórias não pode ser maior que o número de jogos..");
    }
    return (wins / totalGames) * 100
}

export function getRank(winRate){
    if (typeof winRate !== 'number' ) {
        throw new Error("O Winrate deve ser um número");
    }
    if(winRate <= 100 && winRate >= 75){
        return 'Lendário'
    }
    if(winRate <= 74 && winRate >= 55){
        return 'Diamante'
    }
    if(winRate <= 54 && winRate >= 40){
        return 'Ouro'
    }
    if(winRate <= 39 && winRate >= 25){
        return 'Prata'
    }
    if(winRate <= 24 && winRate >= 0){
        return 'Bronze'
    }
}

export function isElite(winRate){
    if (typeof winRate !== 'number' ) {
        throw new Error("O Winrate deve ser um número");
    }

    if(winRate <= 100 && winRate >= 75){
        return true
    }

    if(winRate <= 74 && winRate >= 0){
        return false
    }
}

export function calcKDA(kills, deaths, assists){
    
}