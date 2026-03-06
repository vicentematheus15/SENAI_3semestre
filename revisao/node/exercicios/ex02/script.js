// Exercício 2 — Gerador de Relatório
// Desenvolva um script que leia um arquivo dados.json, processe as informações e gere um novo arquivo relatorio.txt formatado. Utilize leitura e escrita assíncrona com fs.
import {readFile, writeFile} from 'fs/promises'

async function lerArquivo(){
    try{
        const dadosBrutos = await readFile('./dados.json', 'utf-8');
        return dadosBrutos
    }catch(err){
        console.log("DEU ERRO:", err)
    }
}

async function formatarArquivo(dadosBrutos){
    const objetoDados = JSON.parse(dadosBrutos)
    const dadosFormatados = `O livro ${objetoDados.livro} foi escrito por ${objetoDados.autor}`
    console.log(dadosFormatados)
    return dadosFormatados
}

async function gerarRelatorio(dadosFormatados) {
    try{
        const relatorio = await writeFile('./relatorio.txt', dadosFormatados)
    }catch(err){
        console.log("deu erro:", err);
        
    }
}
async function main() {
    
    const dadosBrutos = await lerArquivo();
    const textoFormatado = await formatarArquivo(dadosBrutos);
    await gerarRelatorio(textoFormatado);
    console.log("Processo finalizado");
    
}

main();