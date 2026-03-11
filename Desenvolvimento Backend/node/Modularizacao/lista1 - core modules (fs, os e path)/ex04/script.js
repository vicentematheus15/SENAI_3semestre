// Crie um script que leia um arquivo texto.txt e exiba no console o número total de linhas, palavras e caracteres. Utilize fs/promises com async/await.

import {readFile} from 'fs/promises';

async function lerArquivo(){
    const conteudo = await readFile('./texto.txt', 'utf-8')
    const qtdLinhas = conteudo.trim().split('\n')
    const qtdPalavras = conteudo.split(' ')
    console.log(`Número de linhas: ${qtdLinhas.length} \nNúmero de palavras: ${qtdPalavras.length} `);
}

const dados = await lerArquivo()