//escreva os testes aqui ao vivo
import { describe, expect, it, beforeEach } from 'vitest';
import { AuthService } from '../src/authService';

//Feature
describe('Autenticação de Usuário', () => {
    let authService 

    beforeEach(() => {
        authService = new AuthService()
    })


    //Scenario
    it('Cadastro com dados válidos', () => {
        //Given
        const email = "maria@email.com"
        const senha = "Senha123"

        //When
        const result = authService.register(email, senha)

        //Then
        expect(result.success).toBe(true)
        expect(result.user.email).toBe(email)
    })
})