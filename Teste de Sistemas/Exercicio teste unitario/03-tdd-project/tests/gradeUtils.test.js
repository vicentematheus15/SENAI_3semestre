/**
 * gradeUtils.test.js
 * Testes Unitários — Utilitários de Notas
 *
 * ⚠️  Estes testes já estão escritos.
 * ❌  Rode agora: npx vitest → tudo deve estar VERMELHO.
 * ✅  Seu trabalho é implementar gradeUtils.js até tudo ficar VERDE.
 *
 * Cada teste segue o padrão AAA:
 *   Arrange  → prepara os dados de entrada
 *   Act      → chama a função sendo testada
 *   Assert   → verifica o resultado esperado
 *
 * Quando o teste espera um erro, Act e Assert são combinados em "Act & Assert".
 *
 * Não altere este arquivo.
 */

import { describe, it, expect } from 'vitest';
import { calcAverage, isApproved, getStatus, getLetterGrade } from '../src/gradeUtils.js';

// -------------------------------------------------------------------
// calcAverage()
// -------------------------------------------------------------------
describe('calcAverage()', () => {
  it('deve calcular a média de três notas iguais', () => {
    // Arrange
    const grades = [8, 8, 8];

    // Act
    const result = calcAverage(grades);

    // Assert
    expect(result).toBe(8);
  });

  it('deve calcular a média de notas variadas', () => {
    // Arrange
    const grades = [6, 8, 10];

    // Act
    const result = calcAverage(grades);

    // Assert
    expect(result).toBe(8);
  });

  it('deve retornar a própria nota quando o array tem um único elemento', () => {
    // Arrange
    const grades = [7];

    // Act
    const result = calcAverage(grades);

    // Assert
    expect(result).toBe(7);
  });

  it('deve lançar erro se o array estiver vazio', () => {
    // Arrange
    const grades = [];

    // Act & Assert
    expect(() => calcAverage(grades)).toThrow();
  });

  it('deve lançar erro se alguma nota for menor que 0', () => {
    // Arrange
    const grades = [-1, 5, 8];

    // Act & Assert
    expect(() => calcAverage(grades)).toThrow();
  });

  it('deve lançar erro se alguma nota for maior que 10', () => {
    // Arrange
    const grades = [5, 11, 8];

    // Act & Assert
    expect(() => calcAverage(grades)).toThrow();
  });

  it('deve lançar erro se a entrada for null', () => {
    // Arrange
    const input = null;

    // Act & Assert
    expect(() => calcAverage(input)).toThrow();
  });

  it('deve lançar erro se a entrada for uma string', () => {
    // Arrange
    const input = 'notas';

    // Act & Assert
    expect(() => calcAverage(input)).toThrow();
  });
});

// -------------------------------------------------------------------
// isApproved()
// -------------------------------------------------------------------
describe('isApproved()', () => {
  it('deve retornar true para média igual a 7', () => {
    // Arrange
    const average = 7;

    // Act
    const result = isApproved(average);

    // Assert
    expect(result).toBe(true);
  });

  it('deve retornar true para média acima de 7', () => {
    // Arrange
    const average = 9;

    // Act
    const result = isApproved(average);

    // Assert
    expect(result).toBe(true);
  });

  it('deve retornar false para média abaixo de 7', () => {
    // Arrange
    const average = 6.9;

    // Act
    const result = isApproved(average);

    // Assert
    expect(result).toBe(false);
  });

  it('deve lançar erro se a média não for um número', () => {
    // Arrange
    const invalidInput = 'sete';

    // Act & Assert
    expect(() => isApproved(invalidInput)).toThrow();
  });
});

// -------------------------------------------------------------------
// getStatus()
// -------------------------------------------------------------------
describe('getStatus()', () => {
  it('deve retornar "Aprovado" para média igual a 7', () => {
    // Arrange
    const average = 7;

    // Act
    const result = getStatus(average);

    // Assert
    expect(result).toBe('Aprovado');
  });

  it('deve retornar "Aprovado" para média igual a 10', () => {
    // Arrange
    const average = 10;

    // Act
    const result = getStatus(average);

    // Assert
    expect(result).toBe('Aprovado');
  });

  it('deve retornar "Recuperação" para média igual a 5', () => {
    // Arrange
    const average = 5;

    // Act
    const result = getStatus(average);

    // Assert
    expect(result).toBe('Recuperação');
  });

  it('deve retornar "Recuperação" para média igual a 6.9', () => {
    // Arrange
    const average = 6.9;

    // Act
    const result = getStatus(average);

    // Assert
    expect(result).toBe('Recuperação');
  });

  it('deve retornar "Reprovado" para média igual a 4.9', () => {
    // Arrange
    const average = 4.9;

    // Act
    const result = getStatus(average);

    // Assert
    expect(result).toBe('Reprovado');
  });

  it('deve retornar "Reprovado" para média igual a 0', () => {
    // Arrange
    const average = 0;

    // Act
    const result = getStatus(average);

    // Assert
    expect(result).toBe('Reprovado');
  });

  it('deve lançar erro se a média não for um número', () => {
    // Arrange
    const invalidInput = 'aprovado';

    // Act & Assert
    expect(() => getStatus(invalidInput)).toThrow();
  });
});

// -------------------------------------------------------------------
// getLetterGrade()
// -------------------------------------------------------------------
describe('getLetterGrade()', () => {
  it('deve retornar "A" para média igual a 9', () => {
    // Arrange
    const average = 9;

    // Act
    const result = getLetterGrade(average);

    // Assert
    expect(result).toBe('A');
  });

  it('deve retornar "A" para média igual a 10', () => {
    // Arrange
    const average = 10;

    // Act
    const result = getLetterGrade(average);

    // Assert
    expect(result).toBe('A');
  });

  it('deve retornar "B" para média igual a 7', () => {
    // Arrange
    const average = 7;

    // Act
    const result = getLetterGrade(average);

    // Assert
    expect(result).toBe('B');
  });

  it('deve retornar "B" para média igual a 8', () => {
    // Arrange
    const average = 8;

    // Act
    const result = getLetterGrade(average);

    // Assert
    expect(result).toBe('B');
  });

  it('deve retornar "C" para média igual a 5', () => {
    // Arrange
    const average = 5;

    // Act
    const result = getLetterGrade(average);

    // Assert
    expect(result).toBe('C');
  });

  it('deve retornar "C" para média igual a 6', () => {
    // Arrange
    const average = 6;

    // Act
    const result = getLetterGrade(average);

    // Assert
    expect(result).toBe('C');
  });

  it('deve retornar "D" para média igual a 3', () => {
    // Arrange
    const average = 3;

    // Act
    const result = getLetterGrade(average);

    // Assert
    expect(result).toBe('D');
  });

  it('deve retornar "D" para média igual a 4', () => {
    // Arrange
    const average = 4;

    // Act
    const result = getLetterGrade(average);

    // Assert
    expect(result).toBe('D');
  });

  it('deve retornar "F" para média igual a 0', () => {
    // Arrange
    const average = 0;

    // Act
    const result = getLetterGrade(average);

    // Assert
    expect(result).toBe('F');
  });

  it('deve retornar "F" para média igual a 2.9', () => {
    // Arrange
    const average = 2.9;

    // Act
    const result = getLetterGrade(average);

    // Assert
    expect(result).toBe('F');
  });

  it('deve lançar erro se a média não for um número', () => {
    // Arrange
    const invalidInput = 'A';

    // Act & Assert
    expect(() => getLetterGrade(invalidInput)).toThrow();
  });
});
