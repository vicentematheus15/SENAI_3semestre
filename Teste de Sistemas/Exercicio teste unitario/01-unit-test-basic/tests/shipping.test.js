import {describe, test, expect} from 'vitest';
import { calculateShipping } from '../src/shipping';

describe("calculateShipping()", () => {
    test("Retorna 10 para peso até 1kg", () => {
        //Arrange
        const weight = 0.8;

        //Act
        const result = calculateShipping(weight);
        
        //Assert
        expect(result).toBe(10)
    })

    test("Retorna 20 para peso entre 1kg e 5kg", () => {
        //Arrange
        const weight = 3;

        //Act
        const result = calculateShipping(weight);

        //Assert
        expect(result).toBe(20)
    })

    test("Retorna 40 para peso acima de 5kg", () => {
        //Arrange
        const weight = 6;

        //Act
        const result = calculateShipping(weight);

        //Assert
        expect(result).toBe(40)
    })

    test("Testa limites (boundary values: 5kg", () => {
        //Arrange
        const weight = 5

        //Act
        const result = calculateShipping(weight);

        //Assert
        expect(result).toBe(20)

    })

    test("Retorna erro quando o peso é 0", () => {
        //Arrange
        const weight = 0;

        //Act
        const result = () => calculateShipping(weight);

        //Assert
        expect(result).toThrow("Peso inválido")
    })
})