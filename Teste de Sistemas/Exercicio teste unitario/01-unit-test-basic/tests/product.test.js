import {describe, test, expect} from "vitest"
import { validateProduct } from "../src/product"

describe("validateProduct()", () => {
    test("o resultado nao deve ser undefined", () => {
        //Arrange
        const product = 
        {name:"Mouse",
         price: 80,
         stock: 5
        }
    
        // Act 
        const result = validateProduct(product);

        //Assert
        expect(result).not.toBeUndefined()
    })

    test("Deve retornar um erro ao inserir preço negativo", () => {
        //Arrange
        const product = {
            name: "Garrafa",
            price: -15,
            stock: 3
        }
        //Act
        const result = () => validateProduct(product);
        //Assert
        expect(result).toThrow("Preço inválido")

        //da pra juntar o act e o expect mandando diretamente a arrow function do validateProduct para dentro do expect em vez de guardar ela em uam variável antes, assim:
        //expect(() => validateProduct(product)).toThrow("O preço não pode ser negativo")
    })

    test("Deve retornar um erro ao inserir estoque negativo", () => {
        //Arrange
        const product = {
            name: "Sorvete",
            price: 8,
            stock: -5
        }
        //Act
        const result = () => validateProduct(product)
        //Assert
        expect(result).toThrow("Estoque inválido")
    })

    test("Deve aceitar produtos com 0 de estoque", () => {
        //Arrange
        const product = {
            name: "Camisa",
            price: 10,
            stock: 0
        }
        //Act
        const result = validateProduct(product)
        //Assert
        expect(result).toBeTruthy()
    })

    test("Deve retornar um erro caso o campo 'nome' fique vazio", () => {
        //Arrange
        const product = {
            name: "",
            price: 20,
            stock: 30
        }
        //Act
        const result = () => validateProduct(product)
        //Assert
        expect(result).toThrow("Nome obrigatório")
    })
})

