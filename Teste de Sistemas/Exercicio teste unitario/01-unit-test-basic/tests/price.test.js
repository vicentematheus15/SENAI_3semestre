import {describe, test, expect} from "vitest";
import { calculateTotal } from "../src/price";

describe("calculateTotal()", () => {
    test("Deve retornar o total correto para os valores válidos", () => {
        // Arrange
        const price = 10;
        const quantity = 3;

        //Act
        const result = calculateTotal(price, quantity);

        //Assert
        expect(result).toBe(30);


    })

    test("O resultado deve ser do tipo number", () => {
        //Arrange
        const price = 5
        const quantity = 2

        //Act
        const result = calculateTotal(price, quantity);

        //Assert
        expect(typeof result).toBe("number");
        expect(result).toBeTypeOf("number");
    })

    test("O resultado nao deve ser NaN", () => {
        // Arrange
        const price = 9.99
        const quantity = 3

        //Act
        const result = calculateTotal(price, quantity)

        //Assert
        expect(result).not.toBeNaN();
    })

    test("Deve lancar um erro quando o preco e zero", () => {
        // Arrange
        const price = 0;
        const quantity = 5;

        //Act
        const result = () => calculateTotal(price, quantity);

        //Assert
        expect(result).toThrow("Preço inválido");

        //da pra juntar o act e o expect mandando diretamente a arrow function do calculateTotal para dentro do expect em vez de guardar ela em uam variável antes, assim:
        //expect(() => calculateTotal(price, quantity)).toThrow("Preço inválido")

    })
})
