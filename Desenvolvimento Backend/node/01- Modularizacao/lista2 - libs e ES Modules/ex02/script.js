// Crie um arquivo dados.json contendo um array de produtos (cada um com nome, preco e quantidade). Desenvolva um script que leia esse arquivo de forma assíncrona, calcule o valor total em estoque de cada produto e o valor total geral, e grave um arquivo relatorio.txt formatado com essas informações — incluindo data e hora da geração no cabeçalho do relatório.

import {readFile, writeFile} from 'fs/promises'

async function lerDados(){
    return readFile('dados.json', 'utf-8');
}

function formataDados(dadosBrutos){
    return JSON.parse(dadosBrutos)
}

async function geraRelatorio(objetoDados){
    const data = new Date();
    const dataFormatada = data.toLocaleString('pt-BR')
    const cabecalhoRelatorio = `Relatório de estoque - Gerado em: ${dataFormatada}\n`
    let corpo = "";
    let totalGeral = 0;
    
   for (const produto of objetoDados) {
        const totalProduto = produto.preco * produto.quantidade;
        totalGeral += totalProduto;
        corpo += `Produto: ${produto.nome} | Total: R$ ${totalProduto.toFixed(2)}\n`;
    }
        const rodape = `\nValor Total Geral: R$${totalGeral.toFixed(2)}`
        const relatorio = cabecalhoRelatorio + corpo + rodape
        await writeFile('./relatorio.txt', relatorio )
}

async function main(){
    try{
        const dadosLidos = await lerDados();
        const dadosFormatados = await formataDados(dadosLidos);
        await geraRelatorio(dadosFormatados);  

    }catch(err){
        if(err.code === 'ENOENT'){
            console.error("O arquivo 'dados.json' não foi encontrado.")
        }else{
            console.error("Ocorreu um erro inesperado: ",err.message)
        }
    }
}

main();