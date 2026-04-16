// Desenvolva uma aplicação de linha de comando utilizando ES Modules que:
// • Detecte o diretório do usuário com os.homedir()
// • Crie uma pasta chamada backup caso não exista
// • Copie todos os arquivos .txt de uma pasta origem para a pasta backup
// • Gere um relatório final contendo data, quantidade de arquivos copiados e tamanho total

import fs from 'fs/promises';
import path from 'path';
import os from 'os';

function detectarDiretorio(){
    const diretorio = os.homedir()
    return diretorio    
}

async function criarPasta(diretorio) {
    await fs.mkdir(path.join(diretorio, 'backup'), {recursive: true})
}

async function copiarArquivos(diretorio){
    const listaArquivos = await fs.readdir('./origemTeste')
    const origem = path.resolve('./origemTeste')
    let contador = 0;
    let tamanhoTotal = 0;
    for(const arquivo of listaArquivos){
        if(path.extname(arquivo) === '.txt'){
            const caminhoOrigem = path.join(origem, arquivo);
            const caminhoDestino = path.join(diretorio, 'backup', arquivo);
            await fs.copyFile(caminhoOrigem, caminhoDestino)

            const stats = await fs.stat(caminhoOrigem);
            tamanhoTotal += stats.size;
            contador++
        }
    }
    return {
        total: contador,
        tamanho: tamanhoTotal
    }
}



async function main(){
    const diretorio = detectarDiretorio();
    await criarPasta(diretorio);
    const resultado = await copiarArquivos(diretorio);
    console.log(`
    ======= RELATÓRIO FINAL =======
    Data: ${new Date().toLocaleString()}
    Arquivos copiados: ${resultado.total}
    Tamanho total: ${(resultado.tamanho / 1024).toFixed(2)} KB
    ===============================
    `);
}
main();