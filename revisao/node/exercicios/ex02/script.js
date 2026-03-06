// Exercício 2 — Gerador de Relatório
// Desenvolva um script que leia um arquivo dados.json, processe as informações e gere um novo arquivo relatorio.txt formatado. Utilize leitura e escrita assíncrona com fs.
import {readFile, writeFile} from 'fs/promises'

async function lerArquivo(){
    try{
        const arquivoJson = await readFile('./dados.json', 'utf-8');
        console.log(arquivoJson);
    }catch(err){
        console.log("DEU ERRO:", err)
    }
}

async function formatarArquivo(arquivoJson){
    const arquivoFormatado = JSON.stringify(arquivoJson)
    console.log("ok");
    
    return arquivoFormatado
}

async function gerarRelatorio(arquivoFormatado) {
    try{
        const relatorio = await writeFile('./relatorio.txt', arquivoFormatado)
        console.log(relatorio);
    }catch(err){
        console.log("deu erro:", err);
        
    }
}

lerArquivo();
formatarArquivo();
gerarRelatorio();