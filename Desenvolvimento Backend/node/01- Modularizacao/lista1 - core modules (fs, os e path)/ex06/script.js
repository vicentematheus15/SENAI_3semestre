// Exercício 5 — Criador de Estrutura de Projeto
// Desenvolva um script que crie automaticamente uma estrutura de pastas (src, controllers, services, routes) utilizando fs.mkdir() em conjunto com path.join().

import { mkdir } from 'fs/promises'
import path from 'path'

async function criarPastas() {
    const caminho = path.join(process.cwd(), 'src')
    const nomePastas = [
        caminho, 
        path.join(caminho, 'controllers'), 
        path.join(caminho, 'services'), 
        path.join(caminho, 'routes'), 
    ];
    try{
        for(const pasta of nomePastas){
            await mkdir(pasta, {recursive: true})
            console.log(`Pasta criada: ${pasta}`);                      
        }
    }catch(err){
        console.log("Ocorreu um erro:", err);
    }
    
}
criarPastas()