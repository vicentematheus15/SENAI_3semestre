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
    });

    it('Cadastro com email inválido', () => {
        //Given
        const email = "email-invalido"
        const senha = "Senha123"

        //When + Then
        expect(() => authService.register(email, senha)).toThrow("Email inválido")
    });

    it('Cadastro com senha muito curta', () => {
        //Given
        const email = "maria@email.com"
        const senha = "123"

        //When + Then
        expect(() => authService.register(email, senha)).toThrow("Senha deve ter no mínimo 6 caracteres")
    });

    it('Cadastro com email já existente', () => {
        //Given
        authService.register('maria@email.com', 'Senha123')

        //When + Then
        expect(() => authService.register('maria@email.com', 'Senha123')).toThrow('Email já cadastrado')
    });

    it('Login com credenciais corretas', () => {
        //Given
        const email = "maria@email.com"
        const senha = "Senha123"

        authService.register(email, senha)

        //When
        const result = authService.login(email, senha)

        //Then
        expect(result.success).toBe(true)
        expect(result.user.email).toBe(email)
    });

    it('Login com senha incorreta', () => {
        //Given
        const email = "maria@email.com"
        const senha = "SenhaErrada"

        authService.register(email, 'Senha123')

        //When + Then
        expect(() => authService.login(email, senha)).toThrow('Credenciais inválidas') 
    });

    it('Login com email não cadastrado', () => {
        //Given
        
        //When + Then
        expect(() => authService.login('naoexiste@email.com', 'Senha123')).toThrow('Credenciais inválidas')
    })


})
