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
})