// Exercício 4 — Normalizador de Caminhos
// Crie um script que receba diferentes caminhos de arquivos e utilize path.resolve(), path.join() e path.basename() para exibir informações estruturadas sobre cada arquivo.

import {readdir} from 'fs/promises';
import path, { basename } from 'path';

async function lerArquivos () {
    const listaArquivos = await readdir('./teste');
    return listaArquivos
}




async function main() {
    const listaArquivos = await lerArquivos();

    for(const nomeDoArquivo of listaArquivos){
        let nome = path.basename(nomeDoArquivo)
        let caminhoAbsoluto = path.resolve('./teste', nomeDoArquivo)
        let backup = path.join('Desenvolvimento Backend', 'node', 'exercicios', 'ex04', 'teste', 'backup', nomeDoArquivo )
        const infos = `
                    Nome do arquivo: ${nome}
                    Caminho Absoluto: ${caminhoAbsoluto}
                    Pasta Backup: ${backup}`
        
        console.log(infos);
    }
    
    
}

main();
