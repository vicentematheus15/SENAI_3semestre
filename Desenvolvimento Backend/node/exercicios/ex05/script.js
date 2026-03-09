// Exercício 5 — Criador de Estrutura de Projeto
// Desenvolva um script que crie automaticamente uma estrutura de pastas (src, controllers, services, routes) utilizando fs.mkdir() em conjunto com path.join().

import { mkdir } from 'fs/promises'
import path from 'path'

async function criarPastas() {
    const nomePastas = ['src/Controllers', 'src/Services', 'src/Routes'];
    nomePastas.forEach(async pasta => {
        const caminho = path.join('Desenvolvimento Backend', 'node', 'exercicios', 'ex05')
        const criacao = await mkdir(`${caminho}/${pasta}`, {recursive: true})
    });
    
}
criarPastas()