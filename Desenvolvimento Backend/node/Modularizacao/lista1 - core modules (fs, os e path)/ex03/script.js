// Exercício 3 — Organizador de Arquivos
// Crie um programa que leia todos os arquivos de uma pasta e mova automaticamente arquivos .txt para uma subpasta chamada textos. Utilize fs.readdir(), fs.rename() e manipulação de caminhos.

import {readdir, rename} from 'fs/promises';

async function olharPasta(){
    const listaArquivos = await readdir('./ex03')
    return listaArquivos
}


async function moverArquivos(listaArquivos) {
    try{
       for(const arquivo of listaArquivos){
        if(arquivo.endsWith('.txt')){
            await rename(`./ex03/${arquivo}`, `./ex03/textos/${arquivo}`)
        }
       }
    }catch(err){
        return `Deu erro: ${err}`
    }
}

async function main() {
    const arquivosParaMover = await olharPasta();

    await moverArquivos(arquivosParaMover);
    
}

main();