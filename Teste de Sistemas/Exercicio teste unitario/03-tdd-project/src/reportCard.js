/**
 * reportCard.js
 * Regras de Negócio — Boletim Escolar
 *
 * ❌ NÃO implemente lógica de cálculo diretamente aqui.
 * ✅ OBRIGATÓRIO: importe e use as funções de gradeUtils.js.
 *
 * Fluxo TDD:
 *   1. Rode os testes → veja tudo VERMELHO
 *   2. Implemente UMA função por vez
 *   3. Rode novamente → veja ela ficar VERDE
 *   4. Repita até todos os testes passarem
 */

import { calcAverage, getStatus } from './gradeUtils.js';

export function createStudent(name, grades) {
  // implemente aqui
  // retorne: { name, grades, average, status }
}

export function getTopStudent(students) {
  // implemente aqui
  // retorne o aluno com a maior média
  // em caso de empate, retorne o primeiro da lista
}

export function filterByStatus(students, status) {
  // implemente aqui
  // retorne um array apenas com os alunos que têm o status fornecido
  // status válidos: 'Aprovado', 'Recuperação', 'Reprovado'
  // lance um Error se o status for inválido
}

export function getClassSummary(students) {
  // implemente aqui
  // retorne: { total, approved, recovery, failed }
}
