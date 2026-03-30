/**
 * reportCard.test.js
 * Testes de Integração — Boletim Escolar
 *
 * ⚠️  Estes testes já estão escritos.
 * ❌  Rode agora: npx vitest → tudo deve estar VERMELHO.
 * ✅  Seu trabalho é implementar reportCard.js até tudo ficar VERDE.
 *     Lembre-se: você só pode usar funções de gradeUtils.js na implementação.
 *
 * Não altere este arquivo.
 */

import { describe, it, expect } from 'vitest';
import { createStudent, getTopStudent, filterByStatus, getClassSummary } from '../src/reportCard.js';

// -------------------------------------------------------------------
// createStudent()
// -------------------------------------------------------------------
describe('createStudent()', () => {
  it('deve criar um aluno com nome, notas, média e status corretos', () => {
    expect(createStudent('Ana', [8, 9, 7])).toEqual({
      name: 'Ana',
      grades: [8, 9, 7],
      average: 8,
      status: 'Aprovado',
    });
  });

  it('deve atribuir status "Recuperação" para média entre 5 e 6.9', () => {
    const student = createStudent('Bob', [5, 6, 7]);
    expect(student.average).toBe(6);
    expect(student.status).toBe('Recuperação');
  });

  it('deve atribuir status "Reprovado" para média abaixo de 5', () => {
    const student = createStudent('Carol', [2, 3, 4]);
    expect(student.average).toBe(3);
    expect(student.status).toBe('Reprovado');
  });

  it('deve lançar erro se o nome estiver vazio', () => {
    expect(() => createStudent('', [8, 9, 7])).toThrow();
  });

  it('deve lançar erro se grades for um array vazio', () => {
    expect(() => createStudent('Ana', [])).toThrow();
  });

  it('deve lançar erro se alguma nota for inválida', () => {
    expect(() => createStudent('Ana', [5, 11, 8])).toThrow();
  });
});

// -------------------------------------------------------------------
// getTopStudent()
// -------------------------------------------------------------------
describe('getTopStudent()', () => {
  const students = [
    { name: 'Ana', average: 8, status: 'Aprovado' },
    { name: 'Bob', average: 6, status: 'Recuperação' },
    { name: 'Carlos', average: 9, status: 'Aprovado' },
  ];

  it('deve retornar o aluno com a maior média', () => {
    expect(getTopStudent(students).name).toBe('Carlos');
  });

  it('deve retornar o único aluno se o array tiver apenas um elemento', () => {
    expect(getTopStudent([students[0]]).name).toBe('Ana');
  });

  it('deve retornar o primeiro aluno em caso de empate', () => {
    const tied = [
      { name: 'Ana', average: 8, status: 'Aprovado' },
      { name: 'Bob', average: 8, status: 'Aprovado' },
    ];
    expect(getTopStudent(tied).name).toBe('Ana');
  });

  it('deve lançar erro se o array estiver vazio', () => {
    expect(() => getTopStudent([])).toThrow();
  });
});

// -------------------------------------------------------------------
// filterByStatus()
// -------------------------------------------------------------------
describe('filterByStatus()', () => {
  const students = [
    { name: 'Ana', average: 8, status: 'Aprovado' },
    { name: 'Bob', average: 6, status: 'Recuperação' },
    { name: 'Carol', average: 3, status: 'Reprovado' },
    { name: 'Diego', average: 9, status: 'Aprovado' },
  ];

  it('deve retornar apenas os alunos com status "Aprovado"', () => {
    const result = filterByStatus(students, 'Aprovado');
    expect(result).toHaveLength(2);
    expect(result.every(s => s.status === 'Aprovado')).toBe(true);
  });

  it('deve retornar apenas os alunos com status "Recuperação"', () => {
    const result = filterByStatus(students, 'Recuperação');
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Bob');
  });

  it('deve retornar apenas os alunos com status "Reprovado"', () => {
    const result = filterByStatus(students, 'Reprovado');
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Carol');
  });

  it('deve retornar array vazio se nenhum aluno tiver o status especificado', () => {
    const allApproved = [
      { name: 'Ana', average: 8, status: 'Aprovado' },
      { name: 'Diego', average: 9, status: 'Aprovado' },
    ];
    expect(filterByStatus(allApproved, 'Reprovado')).toHaveLength(0);
  });

  it('deve lançar erro se o status for inválido', () => {
    expect(() => filterByStatus(students, 'Excelente')).toThrow();
  });
});

// -------------------------------------------------------------------
// getClassSummary()
// -------------------------------------------------------------------
describe('getClassSummary()', () => {
  const students = [
    { name: 'Ana', average: 8, status: 'Aprovado' },
    { name: 'Bob', average: 6, status: 'Recuperação' },
    { name: 'Carol', average: 3, status: 'Reprovado' },
    { name: 'Diego', average: 9, status: 'Aprovado' },
    { name: 'Eva', average: 5, status: 'Recuperação' },
  ];

  it('deve retornar o total correto de alunos', () => {
    expect(getClassSummary(students).total).toBe(5);
  });

  it('deve retornar a contagem correta de aprovados, em recuperação e reprovados', () => {
    const summary = getClassSummary(students);
    expect(summary.approved).toBe(2);
    expect(summary.recovery).toBe(2);
    expect(summary.failed).toBe(1);
  });

  it('deve lançar erro se o array de alunos estiver vazio', () => {
    expect(() => getClassSummary([])).toThrow();
  });
});
