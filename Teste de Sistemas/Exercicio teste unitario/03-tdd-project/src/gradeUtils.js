/**
 * gradeUtils.js
 * Utilitários de Notas — Boletim Escolar
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

export function calcAverage(grades) {
  // implemente aqui
}

export function isApproved(average) {
  // implemente aqui
  // aprovado: média >= 7
}

export function getStatus(average) {
  // implemente aqui
  // 'Aprovado'    → média >= 7
  // 'Recuperação' → média >= 5 e < 7
  // 'Reprovado'   → média < 5
}

export function getLetterGrade(average) {
  // implemente aqui
  // 'A' → média >= 9
  // 'B' → média >= 7
  // 'C' → média >= 5
  // 'D' → média >= 3
  // 'F' → média < 3
}
