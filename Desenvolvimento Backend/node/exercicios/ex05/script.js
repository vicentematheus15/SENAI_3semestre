// Exercício 5 — Criador de Estrutura de Projeto
// Desenvolva um script que crie automaticamente uma estrutura de pastas (src, controllers, services, routes) utilizando fs.mkdir() em conjunto com path.join().

import { mkdir } from 'fs/promises'
import path from 'path'

async function criarPastas() {
    const nomePastas = ['src/Controllers', 'src/Services', 'src/Routes'];

    for(const pasta of nomePastas){
        const caminho = path.join(pasta)
        await mkdir(`${caminho}`, {recursive: true})
        console.log(`Pasta criada: ${pasta}`);
        
    }
    
}
criarPastas()