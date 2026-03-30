import { describe, test, expect } from "vitest"
import { applyDiscount } from "../src/discount"

describe("applyDiscount()", () => {
    test("Retorna o preço com desconto aplicado corretamente", () => {
        //Arrange
        const preco = 50;
        const percentage = 10;
        
        //Act
        const result = applyDiscount(preco, percentage);

        //Assert
        expect(result).toBe(45);
    })

    test("Retorna preço original quando o desconto é 0%", () => {
        //arrange
        const preco = 80;
        const percentage = 0;

        //Act
        const result = applyDiscount(preco, percentage);
        
        //Assert
        expect(result) .toBe(80);
    })

    test("Retorna  0 quando o desconto é de 100%", () => {
        //Arrange
        const preco = 40;
        const percentage = 100;
        //Act
        const result = applyDiscount(preco, percentage); 
        
        //Assert
        expect(result).toBe(0)
    })

    test("Retorna erro quando o desconto é negativo", ()=> {
        //Arrange
        const preco = 50;
        const percentage = -10; 
        
        //Act
        const result = () => applyDiscount(preco, percentage);
        
        //Assert
        expect(result).toThrow("Desconto inválido")
    })

    test("Retorna erro quando o desocnto é maior que 100%", () => {
        //Arrange
        const preco = 50;
        const percentage = 120;

        //Act
        const result = () => applyDiscount(preco, percentage);

        //Assert
        expect(result).toThrow("Desconto inválido")

    })
})