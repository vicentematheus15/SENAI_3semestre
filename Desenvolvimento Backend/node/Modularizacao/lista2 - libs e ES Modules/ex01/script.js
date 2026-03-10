// Crie um script que leia o conteúdo de um arquivo log.txt usando fs/promises com async/await. O programa deve contar o total de linhas do arquivo e exibir também as cinco primeiras e as cinco últimas linhas no console. Trate o caso em que o arquivo não existe exibindo uma mensagem de erro amigável em vez de deixar a aplicação quebrar.

import { readFile } from 'fs/promises';

async function lerLog() {
    try{
        const conteudo = await readFile('log.txt', 'utf-8');
        const linhas = conteudo.split('\n');
        const numeroLinhas = linhas.length
        const primeirasLinhas = linhas.slice(0, 5)
        const ultimasLinhas = linhas.slice(-5)
        console.log(numeroLinhas);
        console.log(primeirasLinhas)
        console.log(ultimasLinhas);
    
    }catch(err){
        if(err.code === 'ENOENT'){
            console.log("Arquivo não encontrado. Verifique se o log.txt existe.");
        }else{
            console.log("Erro!");
        }
    }
}

async function main() {
    await lerLog()
}

main()