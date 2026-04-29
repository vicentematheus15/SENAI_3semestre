/**
 * leaderboard.js
 * Regras de Negócio — Ranking de Jogadores
 *
 * ❌ NÃO implemente lógica de cálculo diretamente aqui.
 * ✅ OBRIGATÓRIO: importe e use as funções de playerUtils.js.
 *
 * Fluxo TDD:
 *   1. Rode os testes → veja tudo VERMELHO
 *   2. Implemente UMA função por vez
 *   3. Rode novamente → veja ela ficar VERDE
 *   4. Repita até todos os testes passarem
 */

import { calcWinRate, getRank } from './playerUtils.js'

const players = []

export function createPlayer(name, wins, totalGames){
    if(!name){
        throw new Error("O nome não pode estar vazio.");
    }

    const winRate = calcWinRate(wins, totalGames);

    const newPlayer = {
        name: name,
        wins: wins,
        totalGames: totalGames,
        winRate: winRate,
        rank: getRank(winRate)
    }

    players.push(newPlayer)
    return newPlayer
}

export function getTopPlayer(players){
    if(players.length === 0){
        throw new Error("Não há jogadores na lista");
    }
    let topPlayer = players[0];

    players.forEach(player => {
        if(player.winRate > topPlayer.winRate){
            topPlayer = player
        }
    });
    return topPlayer
}
